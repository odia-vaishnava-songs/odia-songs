const fs = require('fs');
const path = require('path');

function createBackup() {
    const BACKUP_DIR = path.join(__dirname, '../backups');
    const FILES_TO_BACKUP = [
        'src/data/resources.ts',
        'src/data/songsContent.ts'
    ];

    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sessionDir = path.join(BACKUP_DIR, `backup-${timestamp}`);
    fs.mkdirSync(sessionDir);

    FILES_TO_BACKUP.forEach(file => {
        const src = path.join(__dirname, '..', file);
        if (fs.existsSync(src)) {
            const dest = path.join(sessionDir, path.basename(file));
            fs.copyFileSync(src, dest);
        }
    });

    console.log(`✅ AUTO-BACKUP: Created safety snapshot in backups/backup-${timestamp}`);
    
    // Keep only last 10 backups to save space
    const allBackups = fs.readdirSync(BACKUP_DIR)
        .filter(f => f.startsWith('backup-'))
        .map(f => ({ name: f, time: fs.statSync(path.join(BACKUP_DIR, f)).mtime }))
        .sort((a, b) => b.time - a.time);

    if (allBackups.length > 10) {
        allBackups.slice(10).forEach(b => {
            const oldPath = path.join(BACKUP_DIR, b.name);
            fs.rmSync(oldPath, { recursive: true, force: true });
        });
    }
}

if (require.main === module) {
    createBackup();
}

module.exports = { createBackup };
