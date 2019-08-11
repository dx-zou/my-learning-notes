const FS = require("fs");
const PATH = require("path");
function readFileByPromise(fpath) {
  return new Promise((resolve, reject) => {
    FS.readFile(PATH.join(__dirname, fpath), "utf-8", function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}
readFileByPromise("./promise.txt")
  .then(res => {
    console.log(res);
    return readFileByPromise("./promise1.txt");
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err.message);
  });
