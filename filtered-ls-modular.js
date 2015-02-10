var dirReader = require('./dirReader.js');

dirReader(process.argv[2], process.argv[3], function(err, files) {
	if (err)
		return console.err('Error: ', err);

	files.forEach(function(file) {
		console.log(file);
	});
});