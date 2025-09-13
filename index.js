const fs = require("fs");

// Blocking, synchronous way

// fs.writeFileSync("message.txt", "Hello from Node.js 12345 Created on ");

// const data = fs.readFileSync("message.txt", "utf-8");
// console.log(data);

// Non-blocking, asynchronous way

fs.readFile("./txt/message.txt", "utf-8", (err, data1) => {
    if (err) return console.log("ERROR 💥");
        console.log(data1);
});
fs.writeFile("./txt/message2.txt", "Nice to meet you", (err) => {
    if (err) return console.log("ERROR 💥");
    console.log("File written successfully");
});
console.log("Will read file!");