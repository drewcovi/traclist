var fs = require('fs');
console.log('started');
var config = JSON.parse(fs.readFileSync('./files/config.json'));
console.log('Initial config',config);
fs.watchFile('./files/config.json', function(current, previous){
	console.log('config changed');
	config = JSON.parse(fs.readFileSync('./files/config.json'));
	console.log('new config', config);
});