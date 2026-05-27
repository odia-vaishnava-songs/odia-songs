const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const RESOURCES_PATH = path.join(__dirname, '../src/data/resources.ts');
const OUTPUT_PATH = path.join(__dirname, '../src/data/songsContent.ts');
const BACKUP_PATH = path.join(__dirname, '../src/data/songsContent.ts'); // Backup is the file itself for surgical recovery

const { createBackup } = require('./backup_manager.cjs');

/**
 * Automatically cleans known OCR/transliteration defects from the song data.
 * This is the PERMANENT solution for character defects like '비' (Korean Bi) vs 'ବି' (Odia Bi).
 */
function sanitizeData(data) {
    if (!data) return data;
    let str = typeof data === 'string' ? data : JSON.stringify(data);
    
    // 1. Fix Korean character '비' (Bi) -> Odia 'ବି' (Bi)
    str = str.replace(/비/g, 'ବି');
    
    // 2. Fix Sanskrit/Devanagari conjuncts that often slip into Odia OCR
    str = str.replace(/प्र/g, 'ପ୍ର'); // Pra
    str = str.replace(/ब्र/g, 'ବ୍ର'); // Bra
    str = str.replace(/क्र/g, 'କ୍ର'); // Kra
    str = str.replace(/ग्र/g, 'ଗ୍ର'); // Gra
    str = str.replace(/द्र/g, 'ଦ୍ର'); // Dra
    str = str.replace(/त्र/g, 'ତ୍ର'); // Tra
    str = str.replace(/श्र/g, 'ଶ୍ର'); // Shra
    str = str.replace(/प্ৰ/g, 'ପ୍ର'); // Assamese/Bengali Pra
    
    return typeof data === 'string' ? str : JSON.parse(str);
}


async function syncCloudToCode() {
    console.log('--- Cloud-to-Code Sync Started ---');
    
    // Safety Snapshot
    createBackup();

    console.log('1. Reading resources.ts...');
    const resourcesContent = fs.readFileSync(RESOURCES_PATH, 'utf-8');
    const existingContent = fs.existsSync(OUTPUT_PATH) ? fs.readFileSync(OUTPUT_PATH, 'utf-8') : null;
    
    const importRegex = /SONG_[A-Z0-9_]+_STRUCTURED/g;
    const exportNames = Array.from(new Set(resourcesContent.match(importRegex)));
    console.log(`📡 Found ${exportNames.length} structured song exports required.`);

    console.log('2. Fetching latest edits from Supabase...');
    const { data: songs, error } = await supabase
        .from('songs')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error('❌ Database fetch failed:', error.message);
        console.warn('⚠️  Proceeding with local cache... (Sync failed)');
        return false;
    }
    console.log(`✅ Fetched ${songs.length} songs from the cloud.`);

    console.log('3. Mapping and Generating TS file...');
    let outputLines = [
        "import type { StructuredSong } from '../types';",
        "",
        "// THIS FILE IS AUTO-GENERATED FROM THE SUPABASE DATABASE + BACKUP FALLBACK.",
        "// DO NOT MANUALLY EDIT - USE THE MANAGE SONGS DASHBOARD IN THE APP.",
        ""
    ];

    const idToSong = {};
    songs.forEach(s => {
        idToSong[s.id] = s;
    });

    const specialMap = {
    'song-durlabhamanava': 'SONG_DURLABHAMANAVAJANMA_STRUCTURED',
    'song-gopinatha1': 'SONG_GOPINATHA1_STRUCTURED',
    'song-gopinatha2': 'SONG_GOPINATHA2_STRUCTURED',
    'song-gopinatha3': 'SONG_GOPINATHA3_STRUCTURED',
    'song-doyalnitai': 'SONG_DOYALNITAICAITANYA_STRUCTURED',
    'song-ohevaisnava': 'SONG_OHEVAISNAVATHAKURA_STRUCTURED',
    'song-nadiya-godrume': 'SONG_NADIYAGODRUME_STRUCTURED',
    'song-gurudeva-krpa': 'SONG_GURUDEVAKRPABINDU_STRUCTURED',
    'song-gurudeva-boro-krpa': 'SONG_GURUDEVABOROKRPADIA_STRUCTURED',
    'song-krppbsb': 'SONG_KIRUPEPAIBOSEVA_STRUCTURED',
    'song-pradyumnakrpasindhu': 'SONG_PRADAYUMNAKRPASINDHU_STRUCTURED',
    'song-sriyugalakisorarupa': 'SONG_SRIYUGALAKISORARUPA_STRUCTURED',
    'gita-chapter-1': 'SONG_GITA_CHAPTER_1_STRUCTURED',
    'gita-chapter-2': 'SONG_GITA_CHAPTER_2_STRUCTURED',
    'gita-chapter-3': 'SONG_GITA_CHAPTER_3_STRUCTURED',
    'gita-chapter-4': 'SONG_GITA_CHAPTER_4_STRUCTURED',
    'gita-chapter-5': 'SONG_GITA_CHAPTER_5_STRUCTURED',
    'gita-chapter-6': 'SONG_GITA_CHAPTER_6_STRUCTURED',
    'gita-chapter-7': 'SONG_GITA_CHAPTER_7_STRUCTURED',
    'gita-chapter-8': 'SONG_GITA_CHAPTER_8_STRUCTURED',
    'gita-chapter-9': 'SONG_GITA_CHAPTER_9_STRUCTURED',
    'gita-chapter-10': 'SONG_GITA_CHAPTER_10_STRUCTURED',
    'gita-chapter-11': 'SONG_GITA_CHAPTER_11_STRUCTURED',
    'gita-chapter-12': 'SONG_GITA_CHAPTER_12_STRUCTURED',
    'gita-chapter-13': 'SONG_GITA_CHAPTER_13_STRUCTURED',
    'gita-chapter-14': 'SONG_GITA_CHAPTER_14_STRUCTURED',
    'gita-chapter-15': 'SONG_GITA_CHAPTER_15_STRUCTURED',
    'gita-chapter-16': 'SONG_GITA_CHAPTER_16_STRUCTURED',
    'gita-chapter-17': 'SONG_GITA_CHAPTER_17_STRUCTURED',
    'gita-chapter-18': 'SONG_GITA_CHAPTER_18_STRUCTURED',
    'song-sb-harinama-mahima': 'SONG_SB_HARINAMA_MAHIMA_STRUCTURED',
    'song-srisivashtakam': 'SONG_SRISIVASHTAKAM_STRUCTURED',
    'song-jayaradhadhava': 'SONG_JAYARADHAMADHAVA_STRUCTURED',
    'song-shikshashtakam': 'SONG_SIKSHASHTAKAM_STRUCTURED',
    'song-jivjago': 'SONG_JIVJAGOJIVJAGO_STRUCTURED',
    'song-Bolo Hari Bolo': 'SONG_BOLOHARIBOLO_STRUCTURED',
    'song-vrindavanastakam': 'SONG_NAYOGASIDDHIR_STRUCTURED',
    'song-namonamahtulasi': 'SONG_NAMONOMAH_TULASI_STRUCTURED',
    'song-sariraavidyajala': 'SONG_SARIRAVIDYAJALA_STRUCTURED',
    'song-bhaktiahaituki': 'SONG_BHAKTIAAHAITUKI_STRUCTURED',
    'song-jayaradhejayaradheradhe': 'SONG_JAYARADHE_STRUCTURED',
    'song-jayasacinandanasuramunivandana': 'SONG_JAYASACINANDANA_STRUCTURED',
    'song-madhurammadhurebhyopi': 'SONG_MADHURAM_MADHUREBHYO_PI_STRUCTURED',
};

    const extractFromExisting = (exportName) => {
        if (!existingContent) return null;
        const marker = `export const ${exportName}: StructuredSong = `;
        const start = existingContent.indexOf(marker);
        if (start === -1) return null;
        
        let bracketCount = 0;
        let started = false;
        let blockEnd = -1;
        for (let i = start + marker.length; i < existingContent.length; i++) {
            if (existingContent[i] === '{') { bracketCount++; started = true; }
            else if (existingContent[i] === '}') { bracketCount--; }
            if (started && bracketCount === 0) {
                blockEnd = i + 1;
                if (existingContent[blockEnd] === ';') blockEnd++;
                break;
            }
        }
        return blockEnd !== -1 ? existingContent.substring(start + marker.length, blockEnd) : null;
    };

    exportNames.forEach(exportName => {
        let matchingSong = songs.find(s => {
            const derived = `SONG_${s.id.toUpperCase().replace('SONG-', '').replace(/-/g, '')}_STRUCTURED`;
            return derived === exportName || specialMap[s.id] === exportName;
        });

        if (matchingSong && (matchingSong.structured_content || matchingSong.structuredContent)) {
            const rawData = matchingSong.structured_content || matchingSong.structuredContent;
            const data = sanitizeData(rawData); // Permanent Defect Scrub
            outputLines.push(`export const ${exportName}: StructuredSong = ${JSON.stringify(data, null, 4)};`);
            outputLines.push("");
        } else {
            console.log(`🔍 Export ${exportName} not found in DB JSON. Attempting fallback from local file...`);
            const rawFallback = extractFromExisting(exportName);
            const fallback = sanitizeData(rawFallback); // Also clean fallbacks
            if (fallback) {
                outputLines.push(`export const ${exportName}: StructuredSong = ${fallback.trim()}${fallback.trim().endsWith(';') ? '' : ';'}`);
                outputLines.push("");
                console.log(`✅ Recovered ${exportName} from local file.`);
            } else {
                console.warn(`❌ CRITICAL: Export ${exportName} not found anywhere!`);
            }
        }
    });

    const legacyMap = {
        'JAYA_RADHA_MADHAVA': 'song-jayaradhadhava',
        'GITA_MAHATMYA_ODIA': 'song-gitamahatmya',
        'BHULIYA_TOMARE_ODIA': 'song-bhuliyatomare'
    };

    Object.keys(legacyMap).forEach(exportName => {
        const songId = legacyMap[exportName];
        if (idToSong[songId] && idToSong[songId].content) {
            outputLines.push(`export const ${exportName}: string = \`${idToSong[songId].content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`;`);
            outputLines.push("");
        }
    });

    const finalContent = outputLines.join('\n');
    
    // SAFETY GUARD: If the file is significantly smaller than it used to be (e.g. less than 500KB), 
    // it likely means the database is empty or something went wrong. Prevent overwrite.
    const SIZE_THRESHOLD = 500000;
    if (finalContent.length < SIZE_THRESHOLD && fs.existsSync(OUTPUT_PATH)) {
        const oldSize = fs.statSync(OUTPUT_PATH).size;
        if (oldSize > SIZE_THRESHOLD) {
            console.error('🛑 SAFETY SHIELD ACTIVATED: The new Gita/Song content is suspiciously small (%d bytes) compared to the current file (%d bytes).', finalContent.length, oldSize);
            console.error('❌ Overwrite aborted to protect your proofread data. Check your Supabase connection or use the "run_recovery.cjs" script.');
            process.exit(1);
        }
    }

    console.log(`4. Writing to ${OUTPUT_PATH}...`);
    fs.writeFileSync(OUTPUT_PATH, finalContent, 'utf8');

    console.log('✅ Local Sync Complete: Source code is up-to-date with remote phone edits.');
    return true;
}

if (require.main === module) {
    syncCloudToCode();
}

module.exports = { syncCloudToCode };
