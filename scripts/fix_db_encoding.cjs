const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// We'll read the songs directly from the local JSON files we just fixed for these specific IDs
const songFixes = [
    { id: 'song-achyutamkesavam', file: 'achyutam_kesavam_structured.json' },
    { id: 'song-bhishmastuti', file: 'bhishma_stuti_structured.json' },
    { id: 'song-damodarastakam', file: 'damodarastakam_structured.json' },
    { id: 'song-dekhitedekhite', file: 'dekhite_dekhite_structured.json' },
    { id: 'song-gangastotram', file: 'ganga_stotram_structured.json' },
    { id: 'song-gopigitam', file: 'gopi_gitam_structured.json' },
    { id: 'song-govardhanastakam', file: 'govardhanastakam_structured.json' },
    { id: 'song-hariharikabemoresudina', file: 'hari_hari_kabe_more_hoibe_sudina_structured.json' },
    { id: 'song-krsnanamadhare', file: 'krsna_nama_dhare_structured.json' },
    { id: 'song-sadgoswamyastakam', file: 'sad_goswami_astakam_structured.json' },
    { id: 'song-yadiganuranahoito', file: 'yadi_gaura_na_hoito_structured.json' }
];

const fs = require('fs');

async function fixDb() {
    for (const fix of songFixes) {
        if (!fs.existsSync(fix.file)) continue;
        
        console.log(`🔨 Fixing "${fix.id}" in database...`);
        const content = JSON.parse(fs.readFileSync(fix.file, 'utf8'));
        
        const { error } = await supabase
            .from('songs')
            .update({ structured_content: content })
            .eq('id', fix.id);
            
        if (error) {
            console.error(`❌ Failed to fix ${fix.id}:`, error.message);
        } else {
            console.log(`✅ Fixed ${fix.id}`);
        }
    }
}

fixDb();
