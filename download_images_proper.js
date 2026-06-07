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
                console.error(`Failed to download ${url}: ${res.statusCode}`);
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
            console.error(`Error downloading ${url}:`, err);
            resolve(null);
        });
    });
};

async function processFiles() {
    const urlMap = {};
    for (const file of allFiles) {
        let content = fs.readFileSync(file, 'utf8');
        // Match src="https://lh3.googleusercontent.com/..."
        const regex = /src="(https:\/\/lh3\.googleusercontent\.com\/[^"]+)"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const url = match[1];
            if (!urlMap[url]) {
                const filename = `img_${imageCounter++}.webp`;
                urlMap[url] = filename;
                console.log(`Downloading to ${filename}...`);
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
                // Because we extract only the URL from src="URL", we should replace the URL itself
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
