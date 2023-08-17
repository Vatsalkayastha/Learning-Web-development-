const fs = require("fs");
let text = fs.readFileSync("Vatsal.txt","utf-8");
console.log('The content of the file is:    ');
console.log(text);

text = text.replace("website","Web3");
console.log(text);
console.log("Creating the file.....");


fs.writeFileSync("Hello.txt",text);
