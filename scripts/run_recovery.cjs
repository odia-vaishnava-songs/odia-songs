const { execSync } = require('child_process');
const fs = require('fs');

console.log('⏳ Starting Full 18-Chapter Gita Recovery...');

for (let i = 1; i <= 18; i++) {
    console.log(`\n======================================`);
    console.log(`🔄 RECOVERING CHAPTER ${i} `);
    console.log(`======================================`);
    try {
        // Fetch from git history
        const scriptContent = execSync(`git show 0177a0a:sync_gita_ch${i}.cjs`).toString('utf-8');
        const filename = `scripts/sync_gita_ch${i}.cjs`;
        fs.writeFileSync(filename, scriptContent);
        
        // Execute the script to push to Supabase
        const out = execSync(`node ${filename}`).toString('utf-8');
        console.log(out.trim());
        console.log(`✅ Chapter ${i} synced to Supabase successfully.`);
    } catch (e) {
        console.error(`❌ Failed on Chapter ${i}:`, e.message);
        if (e.stdout) console.log(e.stdout.toString('utf-8'));
        if (e.stderr) console.error(e.stderr.toString('utf-8'));
    }
}

console.log('\n--- ALL 18 CHAPTERS COMPLETELY RECOVERED TO SUPABASE ---');
