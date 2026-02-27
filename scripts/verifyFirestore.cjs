const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const configContent = fs.readFileSync(path.join(__dirname, '../src/firebase/config.ts'), 'utf-8');
const configMatch = /export const firebaseConfig = ({[\s\S]*?});/.exec(configContent);
const firebaseConfig = eval(`(${configMatch[1]})`);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function check() {
    const querySnapshot = await getDocs(collection(db, 'songs'));
    console.log(`Total songs in Firestore: ${querySnapshot.size}`);
    querySnapshot.forEach((doc) => {
        if (doc.id.includes('gopinatha')) {
            console.log(`Found: ${doc.id} - ${doc.data().title} - Category: ${doc.data().category}`);
        }
    });
    process.exit(0);
}

check();
