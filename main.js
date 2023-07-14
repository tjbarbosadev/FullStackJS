const http = require('http');
http.createServer(function(req, res) {
  console.log(new Date(), process.pid);
  res.write(`${new Date()} ${process.pid}`);
  res.end();
}).listen(process.env.PORT || 3001);