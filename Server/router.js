exports.route = function (handle, pathname, response) {
	console.log("About to route a request for " + pathname);

	var functionType = 'function'
	var maybeHandlerFn = handle[pathname]
	var handlerType = typeof(maybeHandlerFn)
	var isHandlerAFunction = functionType === handlerType
		
	if (isHandlerAFunction) {
		var handlerFn = maybeHandlerFn
    
		return handlerFn(response);
	} else {
		console.log("No request handler found for " + pathname);
		return "404 Not Found"
	}
}
