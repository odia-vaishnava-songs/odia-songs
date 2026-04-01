const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /비/g, to: 'ବି' },
  { from: /ۇ/g, to: 'ୁ' },
  { from: /ū/g, to: 'ୂ' },
  { from: /카/g, to: 'କା' },
  { from: /辨/g, to: '୫' } // Fixed id: 5 typo in structured content
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  replacements.forEach(rep => {
    content = content.replace(rep.from, rep.to);
  });
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${path.basename(filePath)}`);
  }
}

const files = fs.readdirSync('.').filter(f => f.startsWith('sync_gita_ch') && f.endsWith('.cjs'));
files.forEach(fixFile);
