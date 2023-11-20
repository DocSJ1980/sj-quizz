const fs = require('fs');
const path = require('path');

const ignoreDirectories = ['.next', '.git', 'node_modules'];

function writeDirectoryStructure(dir, indentLevel = 0, stream) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (ignoreDirectories.includes(file)) {
            return;
        }

        const indent = '  '.repeat(indentLevel);

        if (stats.isDirectory()) {
            stream.write(`${indent}- ${file}/\n`);
            writeDirectoryStructure(filePath, indentLevel + 1, stream);
        } else if (stats.isFile()) {
            stream.write(`${indent}- ${file}\n`);
        }
    });
}

const outputFile = path.join(process.cwd(), 'structure.md');
const outputStream = fs.createWriteStream(outputFile);

writeDirectoryStructure(process.cwd(), 0, outputStream);

outputStream.end();