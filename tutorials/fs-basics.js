/**
 * Tutorial: File System Basics
 * 
 * Learn how to work with files and directories in Node.js
 * using the built-in 'fs' module.
 */

const fs = require('fs');
const path = require('path');

console.log('📁 File System Basics Tutorial');
console.log('==============================');
console.log('');

// Create a temporary directory for this tutorial
const tutorialDir = path.join(__dirname, '..', 'temp');

// Ensure the temp directory exists
if (!fs.existsSync(tutorialDir)) {
    fs.mkdirSync(tutorialDir, { recursive: true });
    console.log('✅ Created temporary directory:', tutorialDir);
}

// 1. Writing to a file
console.log('1. Writing to a file...');
const filePath = path.join(tutorialDir, 'example.txt');
const content = 'Hello from Node.js!\nThis is a file created by the fs module.';

try {
    fs.writeFileSync(filePath, content);
    console.log('   ✅ File written successfully');
} catch (error) {
    console.error('   ❌ Error writing file:', error.message);
}

// 2. Reading from a file
console.log('');
console.log('2. Reading from a file...');
try {
    const readContent = fs.readFileSync(filePath, 'utf8');
    console.log('   File content:');
    console.log('   ' + readContent.replace(/\n/g, '\n   '));
} catch (error) {
    console.error('   ❌ Error reading file:', error.message);
}

// 3. Check if file exists
console.log('');
console.log('3. Checking if file exists...');
console.log(`   File exists: ${fs.existsSync(filePath)}`);

// 4. Get file stats
console.log('');
console.log('4. Getting file information...');
try {
    const stats = fs.statSync(filePath);
    console.log(`   File size: ${stats.size} bytes`);
    console.log(`   Created: ${stats.birthtime}`);
    console.log(`   Modified: ${stats.mtime}`);
    console.log(`   Is file: ${stats.isFile()}`);
    console.log(`   Is directory: ${stats.isDirectory()}`);
} catch (error) {
    console.error('   ❌ Error getting file stats:', error.message);
}

// 5. List directory contents
console.log('');
console.log('5. Listing directory contents...');
try {
    const files = fs.readdirSync(tutorialDir);
    console.log('   Files in temp directory:');
    files.forEach(file => {
        console.log(`   - ${file}`);
    });
} catch (error) {
    console.error('   ❌ Error reading directory:', error.message);
}

console.log('');
console.log('✅ File System tutorial completed!');
console.log('   Try running: node index.js async-basics');