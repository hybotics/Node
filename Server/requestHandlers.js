var exec = require("child_process").exec;

function logit (s) {
	var st = "Request handler '" + s + "' was called";
	console.log(st);
}

function out (error, stdout, stderr) {
	response.writeHead(200, {"Content-Type": "text/plain""});
	response.write(stdout);
	response.end();
}

exports.start (response) {
	logit('start');

	exec ("ls -lah", function (out, error, stdout, stderr) {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(stdout);
		response.end();
	});
}

exports.upload = function (response) {
	logit('upload');

	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello upload");
	response.end();
}

exports.error = function () {
	console.log("No request handler found!");

	return "404 Not Found"
}

exports.start = start;
exports.upload = upload;
