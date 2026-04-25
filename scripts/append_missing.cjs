const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const s = createClient('https://ucsoqhdkdfkzqdlxqmdy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec');
const resPath = path.join(__dirname, '../src/data/resources.ts');
const res = fs.readFileSync(resPath, 'utf8');
const localIds = [...res.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

s.from('songs').select('*').then(({data, error}) => {
    if (error) { console.error(error); process.exit(1); }
    const missing = data.filter(d => !localIds.includes(d.id));
    
    let toAppend = '';
    missing.forEach(song => {
        const authorMatch = song.author || (song.title.match(/Narottama/i) ? 'Narottama Dasa Thakura' : 'Bhaktivinoda Ṭhākura');
        const structName = 'SONG_' + song.id.replace('song-', '').replace(/-/g, '').toUpperCase() + '_STRUCTURED';
        toAppend += `    {\n`;
        toAppend += `        id: '${song.id}',\n`;
        toAppend += `        title: '${song.title}',\n`;
        toAppend += `        category: '${song.category || 'Songs'}',\n`;
        toAppend += `        type: 'html',\n`;
        toAppend += `        author: '${authorMatch}',\n`;
        toAppend += `        structuredContent: (Songs as any).${structName},\n`;
        toAppend += `        published: true,\n`;
        toAppend += `        status: '${song.status || 'COMPLETED'}'\n`;
        toAppend += `    },\n`;
    });
    
    fs.writeFileSync(path.join(__dirname, 'missing_resources.txt'), toAppend);
    console.log('Wrote', missing.length, 'missing entries to missing_resources.txt');
    process.exit(0);
});
