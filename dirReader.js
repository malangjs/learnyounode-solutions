var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
	fs.readdir(dirname, function(err, files) {
		if (err)
			return callback(err);
		
		var filtered = files.filter(function(file) {
			return '.' + extension === path.extname(file);
		});
		callback(null, filtered);
	});
};