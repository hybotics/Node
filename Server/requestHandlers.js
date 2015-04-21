var exec = require("child_process").exec;

function logit (s) {
	var st = "Request handler '" + s + "' was called";
	console.log(st);
}

exports.start = function (response) {
	logit('start');
	
	var content = "EMPTY"

	exec ("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(stdout);
		response.end();
	});
}

exports.upload = function (response) {
	logit('upload');
		
	return "Hello upload"
}

exports.error = function () {
	console.log("No request handler found!");

	return "404 Not Found"
}
