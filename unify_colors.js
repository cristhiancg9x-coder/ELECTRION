import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(fullPath));
        } else { 
            if (fullPath.endsWith('.astro') || fullPath.endsWith('.md') || fullPath.endsWith('.html')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk(SRC_DIR);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Blues
    content = content.replace(/text-blue-[89]00/g, 'text-electrion-dark');
    content = content.replace(/bg-blue-[89]00/g, 'bg-electrion-blue');
    content = content.replace(/from-blue-[89]00/g, 'from-electrion-blue');
    content = content.replace(/to-blue-[89]00/g, 'to-electrion-dark');
    content = content.replace(/bg-blue-950/g, 'bg-electrion-dark');
    content = content.replace(/text-blue-100/g, 'text-white/80');
    content = content.replace(/text-blue-[67]00/g, 'text-electrion-blue');
    content = content.replace(/bg-blue-100/g, 'bg-electrion-blue/10');
    
    // Yellows
    content = content.replace(/text-yellow-[345]00/g, 'text-electrion-accent');
    content = content.replace(/bg-yellow-[345]00/g, 'bg-electrion-accent');
    content = content.replace(/border-yellow-[345]00/g, 'border-electrion-accent');
    content = content.replace(/to-yellow-[345]00/g, 'to-electrion-accent');

    // Greens (Checks and bullets, exclude whatsapp bg which is bg-green-500)
    // We only replace text-green to yellow accent.
    content = content.replace(/text-green-[456]00/g, 'text-electrion-accent');

    // Darks/Slates/Grays to uniform electrion-dark
    content = content.replace(/bg-slate-900/g, 'bg-electrion-dark');
    content = content.replace(/bg-gray-900/g, 'bg-electrion-dark');
    content = content.replace(/text-gray-[89]00/g, 'text-electrion-dark');
    content = content.replace(/text-slate-[89]00/g, 'text-electrion-dark');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log("Colors unified successfully across all source files.");
