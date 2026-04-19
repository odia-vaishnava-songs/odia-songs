const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://ucsoqhdkdfkzqdlxqmdy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc29xaGRrZGZrenFkbHhxbWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNzY5ODAsImV4cCI6MjA4NzY1Mjk4MH0.rKZQkigexFy6w1ui99ARuxee6US5hPaTTLRTaASZ2Ec';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const RESOURCES_PATH = path.join(__dirname, '../src/data/resources.ts');
const OUTPUT_PATH = path.join(__dirname, '../src/data/songsContent.ts');
const BACKUP_PATH = path.join(__dirname, '../src/data/songsContent.ts'); // Backup is the file itself for surgical recovery

async function syncCloudToCode() {
    console.log('--- Cloud-to-Code Sync Started ---');

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
        process.exit(1);
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
        'song-jivjago': 'SONG_JIVJAGOJIVJAGO_STRUCTURED',
        'song-kabesricaitanya': 'SONG_KABESRICAITANYA_STRUCTURED',
        'song-jayaradhadhava': 'SONG_JAYARADHAMADHAVA_STRUCTURED',
        'song-bhuliyatomare': 'SONG_BHULIYATOMARE_STRUCTURED',
        'song-gitamahatmya': 'SONG_GITAMAHATMYA_STRUCTURED',
        'song-amito-durjana': 'SONG_AMITODURJANA_STRUCTURED',
        'song-hariboloharibolo': 'SONG_BOLOHARIBOLO_STRUCTURED',
        'song-kesavatuwajagata': 'SONG_KESAVATUWAJAGATA_STRUCTURED',
        'song-nijakarmadosephale': 'SONG_NIJAKARMADOSEPHALE_STRUCTURED'
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
            const data = matchingSong.structured_content || matchingSong.structuredContent;
            outputLines.push(`export const ${exportName}: StructuredSong = ${JSON.stringify(data, null, 4)};`);
            outputLines.push("");
        } else {
            console.log(`🔍 Export ${exportName} not found in DB JSON. Attempting fallback from local file...`);
            const fallback = extractFromExisting(exportName);
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

    console.log(`4. Writing to ${OUTPUT_PATH}...`);
    fs.writeFileSync(OUTPUT_PATH, outputLines.join('\n'), 'utf8');

    console.log('✅ Local Sync Complete: Source code is up-to-date with remote phone edits.');
    return true;
}

if (require.main === module) {
    syncCloudToCode();
}

module.exports = { syncCloudToCode };
