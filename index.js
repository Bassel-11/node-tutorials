const fs = require("fs");
const http = require("http");
const url = require("url");


/////////////////////////filesystem
// Blocking, synchronous way

// fs.writeFileSync("message.txt", "Hello from Node.js 12345 Created on ");

// const data = fs.readFileSync("message.txt", "utf-8");
// console.log(data);

// Non-blocking, asynchronous way

// fs.readFile("./txt/message.txt", "utf-8", (err, data1) => {
//     if (err) return console.log("ERROR 💥");
//         console.log(data1);
// });
// fs.writeFile("./txt/message2.txt", "Nice to meet you", (err) => {
//     if (err) return console.log("ERROR 💥");
//     console.log("File written successfully");
// });
// console.log("Will read file!");


/////////////////////////
// SERVER


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('this is the overview')
    } else if (pathName === '/product'){
        res.end('this is the product')
    } else if (pathName === '/api'){
       res.writeHead(200, {'content-type': 'application/json'});
       res.end(data)
    } else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>')
    } 

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on port 8000");
}); 