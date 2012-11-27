var fs = require('fs');
console.log('Starting');
var content = fs.readFileSync('./files/sample.txt');
console.log('Content: '+content);
console.log('Carrying on')