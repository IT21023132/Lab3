console.log("Hello World!")

console.log("lab 02 feature 1")


// feature 02 read files 
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
if (err) throw err;
console.log(data); });


//feature 03 write files

const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
if (err) throw err;
console.log('File saved!'); });

//creating a web server 
const http = require('http'); http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); res.write('Hello World!');
    res.end();
    }).listen(8080);