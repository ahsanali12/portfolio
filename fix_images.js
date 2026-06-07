const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            if (!file.includes('node_modules') && !file.includes('.next')) {
                results = results.concat(getFiles(file, ext));
            }
        } else { 
            if (file.endsWith(ext)) results.push(file);
        }
    });
    return results;
}

const htmlFiles = getFiles('.', '.html');
const jsxFiles = getFiles('.', '.jsx');
const allFiles = [...htmlFiles, ...jsxFiles];

for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('/images/img_1.webp') || content.includes('/images/img_2.webp')) {
        content = content.replace(/\/images\/img_1\.webp/g, 'https://lh3.googleusercontent.com/aida-public');
        content = content.replace(/\/images\/img_2\.webp/g, 'https://lh3.googleusercontent.com/aida');
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed ' + file);
    }
}
