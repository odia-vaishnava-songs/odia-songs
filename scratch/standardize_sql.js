
import fs from 'fs';

const sqlPath = 'c:/Antigravity/odia-songs/bulk_sync_songs.sql';
let content = fs.readFileSync(sqlPath, 'utf8');

// The SQL uses Odia names in some places and English in others.
// I'll standardize to the Odia names used in the catalog if possible, 
// but since the catalog 'name' is English, I should probably use English for the DB author column 
// to match the RESOURCES logic.

const replacements = [
    [/, 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର',/g, ", 'Bhaktivinoda Thakura',"],
    [/, 'Adi Shankaracharya',/g, ", 'Adi Sankaracarya',"],
    [/, 'Narottama Dasa Thakura',/g, ", 'Narottama Dasa Thakura',"],
    [/, 'Vyasadeva',/g, ", 'Vyasadeva',"],
];

replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
});

// For Gita chapters in SQL, they already had authors in my earlier view_file (Bhaktivinoda Thakura).
// Wait, let me check the SQL file content again for Gita.
// VALUES ('gita-chapter-15', ..., 'ଶ୍ରୀଲ ଭକ୍ତି ବିନୋଦ ଠାକୁର', 'Gita', true)
// I should change these to Vyasadeva.

content = content.replace(/'gita-chapter-(.+?)', '(.+?)', '(.+?)', '(.+?)', 'Bhaktivinoda Thakura'/g, "'gita-chapter-$1', '$2', '$3', '$4', 'Vyasadeva'");

fs.writeFileSync(sqlPath, content);
console.log('SQL Standardization complete.');
