const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'data', 'songsContent.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log("File read successfully. Length:", content.length);
    
    // Check the last 1000 characters
    console.log("Last 1000 chars snippet:");
    console.log(content.slice(-1000));
    
    // Attempt to write it back as clean UTF-8 (without BOM if possible)
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("File rewritten as UTF-8.");
} catch (err) {
    console.error("Error processing file:", err);
}
