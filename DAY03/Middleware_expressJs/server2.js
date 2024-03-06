//Create a web server i.e middleware for client

//send the API request from the POSTMAN application (from browser we can send only one http method request 
//i.e GET. So from the POSTMAN we can create a POST,GET,PUT and DELETE request.)


//Step 1 : load the http module
const http = require('http')

//Step 2 : create a server instance
const server = http.createServer((request,response)=>{
    // console.log('request recived from client')
    // response.end('Response from server')

    // console.log(request)
    // console.log(response)

    console.log(`Http Method : ${request.method}`)
    console.log(`Http Path : ${request.url}`)
    console.log('----------------------')
    response.end()
})

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port no 3000')
})










