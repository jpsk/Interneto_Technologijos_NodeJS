// Fs
const fs = require('fs');

fs.writeFileSync("text.txt", "Hey there!");
console.log("The file was saved!");

// Path
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, 'some/nested/path'))
