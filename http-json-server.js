var http = require('http');
var url = require('url');

var router = {
	'/api/parsetime': function(urlparam, time) {
		return {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
		};
	},
	'/api/unixtime': function(urlparam, time) {
		return {
			unixtime: time.getTime()
		};
	}
};
var server = http.createServer(function(req, res) {
	var urlparam = url.parse(req.url, true);
	var time = new Date(urlparam.query.iso);
	var validRoute = router[urlparam.pathname];
	if (validRoute) {
		res.writeHead(200, {'content-type': 'application/json'});
		res.end(JSON.stringify(validRoute(urlparam, time)));
	} else {
		res.writeHead(404);
		response.end();
	}
});
server.listen(process.argv[2]);