/**
 * Tutorial: Hello World
 * 
 * A simple introduction to Node.js and JavaScript basics.
 * This tutorial demonstrates basic console output and variables.
 */

console.log('🌟 Hello World Tutorial');
console.log('======================');
console.log('');

// Basic console output
console.log('Hello, World!');
console.log('Welcome to Node.js tutorials!');

// Variables and data types
const greeting = 'Hello';
const target = 'Node.js Developer';
let message = `${greeting}, ${target}!`;

console.log('');
console.log('Variables example:');
console.log(`Message: ${message}`);

// Basic function
function sayHello(name = 'Developer') {
    return `Hello, ${name}! Ready to learn Node.js?`;
}

console.log('');
console.log('Function example:');
console.log(sayHello());
console.log(sayHello('Alice'));

// Array and loop example
const technologies = ['Node.js', 'JavaScript', 'Express', 'MongoDB'];

console.log('');
console.log('Technologies you will learn:');
technologies.forEach((tech, index) => {
    console.log(`  ${index + 1}. ${tech}`);
});

console.log('');
console.log('✅ Hello World tutorial completed!');
console.log('   Try running: node index.js fs-basics');