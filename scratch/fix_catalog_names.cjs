const fs = require('fs');
const path = 'src/data/authorCatalog.ts';
let res = fs.readFileSync(path, 'utf8');
res = res.replace(/'A\.C\. Bhaktivedanta Swami'/g, "'Srila Prabhupada'");
res = res.replace(/'Others Authors'/g, "'Other Authors'");
fs.writeFileSync(path, res);
console.log('Updated authorCatalog.ts');
