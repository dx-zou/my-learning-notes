const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    res.writeHeader(200,{
        'Content-Type': 'text/html; charset=utf8'
    })
    if (req.url === '/') {
        res.end('this is index page')
    }
})
server.listen(3003, () => {
    console.log('server is running at 3003');
})