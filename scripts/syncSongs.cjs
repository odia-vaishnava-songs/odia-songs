const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection } = require('firebase/firestore');

// 1. Extract Firebase Config
const configContent = fs.readFileSync(path.join(__dirname, '../src/firebase/config.ts'), 'utf-8');
const configMatch = /export const firebaseConfig = ({[\s\S]*?});/.exec(configContent);
if (!configMatch) {
    console.error("Could not find firebaseConfig in config.ts");
    process.exit(1);
}

// Convert TS/JS object string to JS object
const configStr = configMatch[1];
const firebaseConfig = eval(`(${configStr})`);

// 2. Extract Structured Songs from songsContent.ts
const songsContent = fs.readFileSync(path.join(__dirname, '../src/data/songsContent.ts'), 'utf-8');
const structuredSongs = new Map();

// Helper to match nested braces
function extractObject(str, startPos) {
    let bracketCount = 0;
    let started = false;
    for (let i = startPos; i < str.length; i++) {
        if (str[i] === '{') {
            bracketCount++;
            started = true;
        } else if (str[i] === '}') {
            bracketCount--;
        }
        if (started && bracketCount === 0) {
            return str.substring(startPos, i + 1);
        }
    }
    return null;
}

const songVarRegex = /export const (SONG_\w+_STRUCTURED): StructuredSong = /g;
let match;
while ((match = songVarRegex.exec(songsContent)) !== null) {
    const varName = match[1];
    const objStr = extractObject(songsContent, match.index + match[0].length);
    if (objStr) {
        // Evaluate the object (dangerous but controlled here)
        // Clean up some TS-isms if any
        try {
            // We use a simplified eval that handles basically JS object literals
            // But since it has Odia characters and potentially multiline strings, 
            // we'll just store the string and "eval" it into a JS object.
            const obj = eval(`(${objStr})`);
            structuredSongs.set(varName, obj);
        } catch (e) {
            console.error(`Error parsing ${varName}:`, e.message);
        }
    }
}

// 3. Extract Resources from resources.ts
const resourcesContent = fs.readFileSync(path.join(__dirname, '../src/data/resources.ts'), 'utf-8');
const resourceList = [];

// Find the RESOURCES array
const resourcesArrayMatch = /export const RESOURCES: Resource\[] = \[([\s\S]*?)\];/g;
const arrayMatch = resourcesArrayMatch.exec(resourcesContent);
if (arrayMatch) {
    const arrayBody = arrayMatch[1];
    let pos = 0;
    while (true) {
        const start = arrayBody.indexOf('{', pos);
        if (start === -1) break;
        const objStr = extractObject(arrayBody, start);
        if (!objStr) break;

        try {
            // Create a scope where the structured song variables exist
            const scope = {};
            structuredSongs.forEach((val, key) => {
                scope[key] = val;
            });

            // Eval the resource object with the scope
            const resource = new Function(...Object.keys(scope), `return ${objStr}`)(...Object.values(scope));
            resourceList.push(resource);
        } catch (e) {
            console.error("Error parsing a resource object:", e.message);
        }

        pos = start + objStr.length;
    }
}

console.log(`Extracted ${resourceList.length} resources.`);

// 4. Initialize Firebase and Sync
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sync() {
    console.log("Starting sync to Firestore...");
    for (const resource of resourceList) {
        try {
            const id = resource.id;
            const docRef = doc(db, 'songs', id);

            // Ensure we don't have undefined fields
            const dataToSave = JSON.parse(JSON.stringify({
                ...resource,
                updatedAt: Date.now()
            }));

            await setDoc(docRef, dataToSave, { merge: true });
            console.log(`  Synced: ${resource.title} (${id})`);
        } catch (e) {
            console.error(`  Error syncing ${resource.id}:`, e.message);
        }
    }
    console.log("Sync complete!");
    process.exit(0);
}

sync();
