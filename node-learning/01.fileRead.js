const fs = require("fs");
const path = require("path");
fs.readFile(__dirname + "/files/01.file.js", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
fs.stat(path.join(__dirname, "/files/01.file.js"), (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
fs.readFile(path.join(__dirname, "/files/01.file.js"), "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
