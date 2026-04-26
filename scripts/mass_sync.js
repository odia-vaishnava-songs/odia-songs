
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

const SONGS_CONTENT_PATH = 'src/data/songsContent.ts';
const RESOURCES_PATH = 'src/data/resources.ts';

async function massSync() {
    console.log("🚀 Starting Mass Sync from Cloud to Local...");

    // 1. Fetch all structured songs from DB
    const { data: dbSongs, error } = await supabase
        .from('songs')
        .select('id, structured_content')
        .not('structured_content', 'is', null);

    if (error) {
        console.error("❌ Error fetching from Supabase:", error);
        return;
    }

    console.log(`📡 Found ${dbSongs.length} structured songs in database.`);

    // 2. Read local files
    let songsContent = fs.readFileSync(SONGS_CONTENT_PATH, 'utf8');
    let resources = fs.readFileSync(RESOURCES_PATH, 'utf8');

    let contentUpdates = 0;
    let resourceUpdates = 0;

    for (const song of dbSongs) {
        const id = song.id;
        // Generate uniform constant name
        const cleanId = id.replace(/^song-/, '').replace(/-/g, '').toUpperCase();
        const varName = `SONG_${cleanId}_STRUCTURED`;

        // A. Add to songsContent.ts if missing
        if (!songsContent.includes(`export const ${varName}`)) {
            console.log(`   ➕ Adding ${varName} to songsContent.ts...`);
            const structuredJson = JSON.stringify(song.structured_content, null, 4);
            songsContent += `\nexport const ${varName}: StructuredSong = ${structuredJson};\n`;
            contentUpdates++;
        }

        // B. Link in resources.ts if missing or not linked
        const resourceRegex = new RegExp(`id:\\s*['"]${id}['"]`, 'i');
        if (resourceRegex.test(resources)) {
            // Find the object block for this ID
            const sections = resources.split('},');
            let updated = false;
            
            const newSections = sections.map(section => {
                if (resourceRegex.test(section) && !section.includes('structuredContent:')) {
                    console.log(`   🔗 Linking ${id} in resources.ts...`);
                    // We need to insert before the closing block or after a property
                    // Typically before 'published:' or at the end
                    if (section.includes('author:')) {
                        updated = true;
                        resourceUpdates++;
                        return section.replace(/author:\s*['"].*?['"]\s*,?/, (match) => {
                            return `${match}\n        structuredContent: (Songs as any).${varName},`;
                        });
                    }
                }
                return section;
            });

            if (updated) {
                resources = newSections.join('},');
            }
        }
    }

    // 3. Save files
    if (contentUpdates > 0) {
        fs.writeFileSync(SONGS_CONTENT_PATH, songsContent, 'utf8');
        console.log(`✅ Updated songsContent.ts (+${contentUpdates} songs).`);
    } else {
        console.log("ℹ️ songsContent.ts is already up to date.");
    }

    if (resourceUpdates > 0) {
        fs.writeFileSync(RESOURCES_PATH, resources, 'utf8');
        console.log(`✅ Updated resources.ts (linked ${resourceUpdates} songs).`);
    } else {
        console.log("ℹ️ resources.ts is already up to date.");
    }

    console.log("🎉 Mass Sync Complete!");
}

massSync();
