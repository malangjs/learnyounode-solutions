var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

var requestUrl = function(index) {
	http.get(process.argv[index], function(response) {
			var str = '';
			response.setEncoding('utf8');
			response.pipe(
					bl(function(err, data) {
						if (err)
							return console.error(err);
						
						results[index - 2] = data.toString();
						printResults();
					})
				);
		});
};

var printResults = function() {
	count++;
	if (count === 3)
		results.forEach(function(result) {
			console.log(result);
		});
};

process.argv.forEach(function(arg, index){
	if (index > 1) {
		requestUrl(index);
	}
});