var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	fs.createReadStream(fileName).pipe(res);
});
server.listen(portNumber);