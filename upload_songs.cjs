const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ucsoqhdkdfkzqdlxqmdy.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec";
const supabase = createClient(SUPABASE_URL, ANON_KEY);

function convertToOdiaNumber(numStr) {
    const odiaNumerals = { '1': '୧', '2': '୨', '3': '୩', '4': '୪', '5': '୫', '6': '୬', '7': '୭', '8': '୮', '9': '୯', '0': '୦' };
    return numStr.toString().split('').map(char => odiaNumerals[char] || char).join('');
}

async function upload() {
    console.log("Logging in...");
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    if (authError) return console.error("Login failed:", authError);
    console.log("Logged in UID:", authData.user.id);

    const text = fs.readFileSync('c:/Antigravity/odia-songs/odia-songs/APP-Srila Bhaktivinoda Thakura.txt', 'utf8');
    const lines = text.split('\n').map(l => l.trimEnd());

    let songs = [];
    let currentSongLines = [];
    let englishTitle = '';
    let odiaTitle = '';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.includes('— ଶ୍ରୀ') && line.includes('ଭକ୍ତି')) {
            if (currentSongLines.length > 0) {
                songs.push({ englishTitle, odiaTitle, content: currentSongLines.join('\n') });
            }
            // Start new song
            englishTitle = lines[i - 3] || '';
            odiaTitle = lines[i - 1] || '';
            if (englishTitle.trim() === '') englishTitle = lines[i - 2] || 'Unknown';
            currentSongLines = [];
        } else {
            currentSongLines.push(lines[i]); // Keep full text block formatting
        }
    }
    if (currentSongLines.length > 0) {
        songs.push({ englishTitle, odiaTitle, content: currentSongLines.join('\n') });
    }

    console.log(`Found ${songs.length} songs. Starting upload...`);

    let count = 0;
    for (const s of songs) {
        const titleStr = s.englishTitle.trim() !== 'Unknown' ? s.englishTitle.trim() : s.odiaTitle.trim();
        const baseId = 'song-' + titleStr.toLowerCase().replace(/[^a-z0-9]/g, '');

        let verses = [];
        // very basic parsing for structured content: find lines starting with (୧) or 1.
        let linesArr = s.content.split('\n');

        let currentVerseId = null;
        let currentVerseContent = [];
        for (let l of linesArr) {
            let match = l.match(/^\s*\(?([୦-୯0-9]+)\)?\s*$/);
            if (match) {
                if (currentVerseId !== null) {
                    verses.push({
                        id: parseInt(currentVerseId.toString().replace(/[୦-୯]/g, m => '0123456789'['୦୧୨୩୪୫୬୭୮୯'.indexOf(m)])),
                        lyric: currentVerseContent.join('<br/>').trim(),
                        translation: ''
                    });
                }
                currentVerseId = match[1];
                currentVerseContent = [];
            } else {
                currentVerseContent.push(l);
            }
        }
        if (currentVerseId !== null) {
            verses.push({
                id: parseInt(currentVerseId.toString().replace(/[୧୨୩୪୫୬୭୮୯୦]/g, m => '1234567890'['୧୨୩୪୫୬୭୮୯୦'.indexOf(m)])),
                lyric: currentVerseContent.join('<br/>').trim(),
                translation: ''
            });
        }

        // This is a naive parse. Content is preserved exactly.
        const dbSong = {
            id: baseId.substring(0, 100),
            title: s.odiaTitle.trim() || titleStr,
            category: 'Songs',
            type: 'html',
            description: titleStr,
            content: s.content.replace(/\n/g, '<br/>'),
            structured_content: { verses: verses.length > 0 ? verses : [{ id: 1, lyric: "See content for full view", translation: "" }] },
            author: 'Bhaktivinoda Ṭhākura',
            verified: false,
            status: 'NOT_DONE',
            published: true,
            updated_at: new Date().toISOString()
        };

        const { error } = await supabase.from('songs').upsert(dbSong, { onConflict: 'id' });
        if (error) {
            console.error(`Error uploading ${dbSong.id}:`, error.message);
        } else {
            console.log(`Uploaded: ${dbSong.title}`);
            count++;
        }
    }
    console.log(`Successfully uploaded ${count} out of ${songs.length} songs.`);
}

upload();
