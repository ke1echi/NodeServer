var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
	response.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.name) {
    // User told us their name in the GET request, ex: http://host:3000/?name=John Doe
		response.end(`Hello ${queryData.name}, Welcome to WeJapa Internships\n`);
  } else {
    response.end(`Hello World, Welcome to WeJapa Internships\n`);
  }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);