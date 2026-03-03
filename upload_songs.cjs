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
        let linesArr = s.content.split('\n');

        let currentVerseId = null;
        let currentVerseContent = [];
        let isParsingTranslation = false;
        let currentTranslationLines = [];

        let firstVerseCompleted = false;
        let wordMeaningsParsed = [];

        for (let i = 0; i < linesArr.length; i++) {
            let l = linesArr[i];

            // Check for word meanings block (long line with emdashes)
            if (l.includes(' — ') || l.includes(' - ')) {
                // Ignore if it's the composer line
                // Wait, some song lines might have '-' or '—'
                // Usually word meanings are clustered with multiple em dashes representing word-meaning pairs.
                let parts = l.split(/ — | - |;| \/ | , /).filter(p => p.trim() !== '');
                if (parts.length > 4 && l.length > 50) {
                    // highly likely to be a word meanings block
                    // very naive parsing: split by ';' or ','
                    let pairs = l.split(';');
                    for (let p of pairs) {
                        let kv = p.split(/—|-/);
                        if (kv.length === 2) {
                            wordMeaningsParsed.push({
                                word: kv[0].trim(),
                                meaning: kv[1].trim()
                            });
                        }
                    }
                    continue;
                }
            }

            // Look for (୧) or 1.
            let odiaNumMatch = l.match(/^\s*\(?([୦-୯]+)\)?\s*$/);
            let engNumMatch = l.match(/^\s*([0-9]+)\.\s*$/);

            if (odiaNumMatch) {
                if (currentVerseId !== null && !isParsingTranslation) {
                    let v = {
                        id: parseInt(currentVerseId.toString().replace(/[୦-୯]/g, m => '0123456789'['୦୧୨୩୪୫୬୭୮୯'.indexOf(m)])),
                        lyric: currentVerseContent.join('\n').trim(),
                        translation: '',
                        wordMeanings: []
                    };
                    if (!firstVerseCompleted) {
                        v.wordMeanings = wordMeaningsParsed; // attach to first verse just in case we processed it early
                        firstVerseCompleted = true;
                    }
                    verses.push(v);
                }
                currentVerseId = odiaNumMatch[1];
                currentVerseContent = [];
                isParsingTranslation = false;
            } else if (engNumMatch) {
                let idStr = engNumMatch[1];
                let verseId = parseInt(idStr);
                let targetVerse = verses.find(v => v.id === verseId);
                isParsingTranslation = true;
                currentTranslationLines = [];

                let j = i + 1;
                while (j < linesArr.length) {
                    if (linesArr[j].match(/^\s*([0-9]+)\.\s*$/) || (linesArr[j].includes(' — ') && linesArr[j].length > 50)) {
                        break;
                    }
                    currentTranslationLines.push(linesArr[j]);
                    j++;
                }
                if (targetVerse) {
                    targetVerse.translation = currentTranslationLines.join('\n').trim();
                    if (verseId === 1 && wordMeaningsParsed.length > 0) {
                        targetVerse.wordMeanings = wordMeaningsParsed;
                    }
                }
                i = j - 1;
            } else {
                if (!isParsingTranslation && currentVerseId !== null) {
                    currentVerseContent.push(l);
                }
            }
        }

        if (currentVerseId !== null && !isParsingTranslation) {
            let v = {
                id: parseInt(currentVerseId.toString().replace(/[୦-୯]/g, m => '0123456789'['୦୧୨୩୪୫୬୭୮୯'.indexOf(m)])),
                lyric: currentVerseContent.join('\n').trim(),
                translation: '',
                wordMeanings: []
            };
            if (!firstVerseCompleted && wordMeaningsParsed.length > 0) {
                v.wordMeanings = wordMeaningsParsed;
                firstVerseCompleted = true;
            }
            verses.push(v);
        }

        // Attach parsed word meanings to the first verse if it exists and hasn't been set
        if (verses.length > 0 && verses[0].wordMeanings && verses[0].wordMeanings.length === 0 && wordMeaningsParsed.length > 0) {
            verses[0].wordMeanings = wordMeaningsParsed;
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
