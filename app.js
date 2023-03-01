console.log("Hello World!")

console.log("lab 02 feature 1")


// feature 02 read files 
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
if (err) throw err;
console.log(data); });