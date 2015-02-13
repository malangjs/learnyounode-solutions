var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
	var strDate = strftime('%F %H:%M') + '\n';
	socket.end(strDate);
});
server.listen(Number(process.argv[2]);