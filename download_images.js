const fs = require('fs');
const https = require('https');
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

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

let imageCounter = 1;
const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(filepath)) {
            resolve(filepath);
            return;
        }
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                resolve(null);
                return;
            }
            const file = fs.createWriteStream(filepath);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(filepath);
            });
        }).on('error', (err) => {
            resolve(null);
        });
    });
};

async function processFiles() {
    const urlMap = {};
    for (const file of allFiles) {
        let content = fs.readFileSync(file, 'utf8');
        const regex = /https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-]+/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const url = match[0];
            if (!urlMap[url]) {
                const filename = `img_${imageCounter++}.webp`;
                urlMap[url] = filename;
                console.log(`Downloading ${url} to ${filename}...`);
                await downloadImage(url, path.join(imgDir, filename));
            }
        }
    }

    // Now replace
    for (const file of allFiles) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        for (const [url, filename] of Object.entries(urlMap)) {
            if (content.includes(url)) {
                content = content.split(url).join(`/images/${filename}`);
                changed = true;
            }
        }
        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
}

processFiles().catch(console.error);
