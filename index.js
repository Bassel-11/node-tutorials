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

const replcaeTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    //overview page
    if (pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {'content-type': 'text/html'});
        const cardHtml = dataObj.map(el => replcaeTemplate(tempCard, el));
        console.log(cardHtml);
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
        res.end(output)
    //product page
    } else if (pathName === '/product'){
        res.end('this is the product')
    //API
    } else if (pathName === '/api'){
       res.writeHead(200, {'content-type': 'application/json'});
       res.end(data)
    //not found
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