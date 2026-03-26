import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const transliterateMap = {
    'ଅ': 'A', 'ଆ': 'A', 'ଇ': 'I', 'ଈ': 'I', 'ଉ': 'U', 'ଊ': 'U', 'ଋ': 'R', 'ଌ': 'L', 'ଏ': 'E', 'ଐ': 'Ai', 'ଓ': 'O', 'ୌ': 'Au',
    'କ': 'K', 'ଖ': 'Kh', 'ଗ': 'G', 'ଘ': 'Gh', 'ଙ': 'N', 'ଚ': 'C', 'ଛ': 'Ch', 'ଜ': 'J', 'ଝ': 'Jh', 'ଞ': 'N', 'ଟ': 'T', 'ଠ': 'Th', 'ଡ': 'D', 'ଢ': 'Dh', 'ଣ': 'N', 'ତ': 'T', 'ଥ': 'Th', 'ଦ': 'D', 'ଧ': 'Dh', 'ନ': 'N', 'ପ': 'P', 'ଫ': 'Ph', 'ବ': 'B', 'ଭ': 'Bh', 'ମ': 'M', 'ଯ': 'Y', 'ର': 'R', 'ଲ': 'L', 'ଳ': 'L', 'ଵ': 'V', 'ଶ': 'S', 'ଷ': 'S', 'ସ': 'S', 'ହ': 'H',
    '଼': '', 'ା': 'a', 'ି': 'i', 'ୀ': 'i', 'ୁ': 'u', 'ୂ': 'u', 'ୃ': 'r', 'ୄ': 'r', 'େ': 'e', 'ୈ': 'ai', 'ୋ': 'o', 'ୌ': 'au', '୍': '', 'ଂ': 'n', 'ଃ': 'h', 'ଁ': 'n'
};

function transliterateOdia(text) {
    let result = '';
    for (const char of text) {
        result += transliterateMap[char] || char;
    }
    return result.replace(/[^a-zA-Z\s-]/g, '').trim();
}

async function run() {
    console.log("Logging in...");
    const { data: auth } = await supabase.auth.signInWithPassword({
        email: "daitariswain7@gmail.com",
        password: "pass-969200"
    });

    console.log("Fetching songs...");
    const { data: songs } = await supabase.from('songs').select('id, title, title_english');

    console.log(`Analyzing ${songs.length} songs...`);
    for (const song of songs) {
        let title_english = song.title_english;
        
        // If English title is missing or empty, try to extract from original title
        if (!title_english || title_english.trim() === "") {
            // Regex to find English text inside parentheses, especially at the end
            // Handles cases like: ଗୋପୀନାଥ (Part 1): ମମ ନିବେଦନ ଶୁନୋ (Gopinātha Part 1)
            const matches = [...song.title.matchAll(/\(([^)]+)\)/g)];
            if (matches.length > 0) {
                // Take the last match that looks like English text (A-Z)
                for (let i = matches.length - 1; i >= 0; i--) {
                    const content = matches[i][1];
                    if (/[a-zA-Z]/.test(content)) {
                        title_english = content.trim();
                        break;
                    }
                }
            }
            
            // If still no English title, transliterate the Odia title
            if (!title_english || title_english.trim() === "") {
                const odiaPart = song.title.split('(')[0].trim();
                title_english = transliterateOdia(odiaPart);
                console.log(`Transliterated: ${odiaPart} -> ${title_english}`);
            }
        }

        if (title_english && title_english !== song.title_english) {
            console.log(`Updating ${song.id}: "${title_english}"`);
            const { error } = await supabase.from('songs').update({
                title_english: title_english
            }).eq('id', song.id);
            if (error) console.error("Update Error:", error);
        }
    }
    console.log("Migration complete!");
    process.exit(0);
}
run();
