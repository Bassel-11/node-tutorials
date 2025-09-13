#!/usr/bin/env node

/**
 * Node.js Tutorials - Main Entry Point
 * 
 * This file serves as the main entry point for the Node.js tutorials repository.
 * Run different tutorials by passing the tutorial name as an argument.
 * 
 * Usage:
 *   npm start
 *   npm run dev
 *   node index.js [tutorial-name]
 */

const fs = require('fs');
const path = require('path');

// Get tutorial name from command line arguments
const tutorialName = process.argv[2];

// Available tutorials directory
const tutorialsDir = path.join(__dirname, 'tutorials');

function showAvailableTutorials() {
    console.log('🚀 Welcome to Node.js Tutorials!');
    console.log('');
    console.log('Available tutorials:');
    
    try {
        if (fs.existsSync(tutorialsDir)) {
            const tutorials = fs.readdirSync(tutorialsDir)
                .filter(file => file.endsWith('.js'))
                .map(file => file.replace('.js', ''));
            
            if (tutorials.length > 0) {
                tutorials.forEach((tutorial, index) => {
                    console.log(`  ${index + 1}. ${tutorial}`);
                });
            } else {
                console.log('  No tutorials found yet. Create some in the tutorials/ directory!');
            }
        } else {
            console.log('  Tutorials directory not found. Creating it now...');
            fs.mkdirSync(tutorialsDir, { recursive: true });
            console.log('  ✅ Created tutorials/ directory');
        }
    } catch (error) {
        console.error('Error reading tutorials:', error.message);
    }
    
    console.log('');
    console.log('Usage:');
    console.log('  node index.js [tutorial-name]');
    console.log('  npm start [tutorial-name]');
    console.log('  npm run dev (for development with auto-reload)');
    console.log('');
    console.log('For local development:');
    console.log('  1. Clone this repository');
    console.log('  2. Run: npm install');
    console.log('  3. Run: npm start');
    console.log('  4. Create new tutorials in the tutorials/ directory');
}

function runTutorial(name) {
    const tutorialPath = path.join(tutorialsDir, `${name}.js`);
    
    if (fs.existsSync(tutorialPath)) {
        console.log(`Running tutorial: ${name}`);
        console.log('---');
        try {
            require(tutorialPath);
        } catch (error) {
            console.error(`Error running tutorial "${name}":`, error.message);
        }
    } else {
        console.log(`❌ Tutorial "${name}" not found.`);
        console.log('');
        showAvailableTutorials();
    }
}

// Main execution
if (tutorialName) {
    runTutorial(tutorialName);
} else {
    showAvailableTutorials();
}