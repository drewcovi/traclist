var fs = require('fs');
console.log('Starting');
fs.writeFileSync('./files/write_sync.txt', 'Hello World! Synchronous!');
console.log('finished');