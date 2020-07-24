// Creating Server variables
const http = require('http')
const port = 3000


// Creating Server
const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('hello node')
    res.end()
})


// Setup server to listen to port
server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening' + port)
    }
})