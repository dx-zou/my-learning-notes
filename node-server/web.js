const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
//托管静态资源
app.use(express.static(path.join(__dirname,'./public')))
app.listen(3001,() => {
    console.log('server is running at port 3001');
})