import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = './src/assets';
const OUTPUT_DIR = './public/img';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs.readdirSync(INPUT_DIR);

console.log(`🚀 Starting optimization of ${files.length} assets...`);

for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${fileName}.webp`);

    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        console.log(`⌛ Optimizing: ${file}`);
        await sharp(inputPath)
            .resize(800) // Resize to a max width of 800px for the web
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`✅ Done: ${fileName}.webp (${(stats.size / 1024).toFixed(2)} KB)`);
    }
}

console.log('✨ All images optimized and saved to public/img/');
