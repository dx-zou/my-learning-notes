const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer();
server.on("request", (req, res) => {
  let url = req.url;
  fs.readFile(path.join(__dirname, url), (err, buffer) => {
    if (err) return res.end("404 Not Found");
    res.end(buffer);
  });
});
server.listen(3000);
