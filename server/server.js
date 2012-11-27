var http = require('http');
console.log('starting');
var host = '127.0.0.1';
var port = 1337;
var server = http.createServer(function(request, response){
	console.log('request received:', request.url);
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello world!');
});
server.listen(port, host, function(){
	console.log('listening...', host, port)
})