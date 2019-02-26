const path = require('path')
const fs = require('fs')

function promiseReadfile(file) {
    return new Promise(function(resolve,reject) {
        fs.readFile(path.join(__dirname,`./public/${file}`),'utf8',(err,res) => {
            if (err) return reject(err)
            resolve(res)
        })
    })
}

promiseReadfile('index.html')
.then(res => {
    console.log(res);
    return promiseReadfile('user.html')
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})