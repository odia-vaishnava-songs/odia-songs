const fs = require('fs');
const content = fs.readFileSync('odia-songs/APP-Srila Bhaktivinoda Thakura.txt', 'utf8');
const linesArr = content.split(/\r?\n/);

let findings = [];
for (let i = 0; i < linesArr.length; i++) {
    let l = linesArr[i];
    let m = l.match(/(?:^|[\s|।])(\(?[୦-୯]+\)?|[୦-୯]+)(?:[\s|।]|$)(?!([\s\S]*?[।|]))/);
    if (m) {
        findings.push(`${i + 1}: ${l}`);
    }
}
console.log('Found ' + findings.length + ' matches');
if (findings.length > 0) {
    console.log(findings.slice(0, 10).join('\n'));
}
