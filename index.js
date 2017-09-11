const http = require('http');
var url = require("url");
var ip = require("ip");
const hostname = ip.address();
const port = 3000;

const server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;

  res.end(JSON.stringify(queryAsObject));
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
