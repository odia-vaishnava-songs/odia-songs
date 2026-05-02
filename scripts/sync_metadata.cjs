
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function syncMetadata() {
    console.log('Reading resources.ts...');
    const resourcesPath = path.join(__dirname, '../src/data/resources.ts');
    const content = fs.readFileSync(resourcesPath, 'utf8');

    // Split by object blocks
    const blocks = content.split('},').map(b => b.trim());
    const metadata = [];

    blocks.forEach(block => {
        const idMatch = block.match(/id:\s*'(.+?)'/);
        const authorMatch = block.match(/author:\s*'(.+?)'/);
        const categoryMatch = block.match(/category:\s*'(.+?)'/);

        if (idMatch) {
            metadata.push({
                id: idMatch[1],
                author: authorMatch ? authorMatch[1] : null,
                category: categoryMatch ? categoryMatch[1] : null
            });
        }
    });

    console.log(`Found ${metadata.length} songs in local resources.`);
    console.log('Syncing to Supabase...');

    let updatedCount = 0;
    let errorCount = 0;

    for (const item of metadata) {
        if (!item.author && !item.category) continue;

        const updateData = {};
        if (item.author) updateData.author = item.author;
        if (item.category) updateData.category = item.category;

        const { error } = await supabase
            .from('songs')
            .update(updateData)
            .eq('id', item.id);

        if (error) {
            // If the song doesn't exist in the DB, we might want to know, 
            // but for now we are just updating existing ones.
            // console.error(`Error updating ${item.id}:`, error.message);
            errorCount++;
        } else {
            updatedCount++;
            if (updatedCount % 20 === 0) console.log(`  Progress: ${updatedCount} songs updated...`);
        }
    }

    console.log(`\n✅ Sync complete!`);
    console.log(`- Successfully updated: ${updatedCount} songs`);
    console.log(`- Failed/Missing in DB: ${errorCount} songs (these might need a full insert)`);
}

syncMetadata();
