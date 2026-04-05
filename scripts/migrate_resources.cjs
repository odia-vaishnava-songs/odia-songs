const fs = require('fs');
const path = require('path');

const RESOURCES_PATH = 'src/data/resources.ts';

if (!fs.existsSync(RESOURCES_PATH)) {
    console.error('File not found');
    process.exit(1);
}

let content = fs.readFileSync(RESOURCES_PATH, 'utf-8');

// Replace the massive import block
content = content.replace(/import\s*\{[\s\S]*?\}\s*from\s*'\.\/songsContent';/, "import * as Songs from './songsContent';");

// Replace structuredContent assignments
content = content.replace(/structuredContent:\s*([A-Z0-9_]+_STRUCTURED)/g, 'structuredContent: (Songs as any).$1');

// Replace string content assignments (e.g., JAYA_RADHA_MADHAVA)
// We specifically target the standalone constants in the import list
const stringConstants = [
    'JAYA_RADHA_MADHAVA',
    'GITA_MAHATMYA_ODIA',
    'BHULIYA_TOMARE_ODIA'
];

stringConstants.forEach(name => {
    const regex = new RegExp(`content:\\s*${name}`, 'g');
    content = content.replace(regex, `content: (Songs as any).${name}`);
});

fs.writeFileSync(RESOURCES_PATH, content);
console.log('✅ Successfully refactored resources.ts to use resilient imports.');
