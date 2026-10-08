const fs = require('fs');
const path = require("path");

const logDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir);

    for (const file of files) {
        console.log(`delete files....${file}`);
        fs.unlinkSync(path.join(logDir, file));
    }
    fs.rmdirSync(logDir);
}