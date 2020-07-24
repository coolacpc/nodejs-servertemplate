// Creating Server variables
const http = require('http')
const fs = require('fs')
const port = 3001


// Creating Server
const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) { //Rendering HTML file
        if (error) {  // Error Handler 
            res.writeHead(404)
            res.write('Error: No such file or directory, Try again')
        } else {
            res.write(data) // Renders HTML file is no errors found (your localhost link)
        }
        res.end()
    })
})


// Setup server to listen to port
server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening' + port)
    }
})