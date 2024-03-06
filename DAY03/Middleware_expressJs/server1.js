//Express JS

//HTTP module used 

//step 1 : load the http module from node

const http = require('http')

//step 2 : create a server instance.

const server = http.createServer((request,response)=>{

    //Request : recieved from user
    //response : An emtpy value need to filled with response

    console.log('request received from user...')

    //send the empty response from user
    // response.end()

    //send the hello world from user in response

    // response.end('hello world from server..')

   // response.end('<h1 style="color: red ; font-family : arial">Hello world from user..</h1>')
   
   //send the JSON object to the client

   const person = {
    name : 'person1',
    age : 23,
    email : 'abc@gmai.com',
    phone : '+91773663',
    addrs : 'addrs1'
   }
    //    response.end(person) will give u error because its required string value to be passed so 
    //    we convert json object into string using JS inbuit feature called JSON.stringify(object_name)

    const strPers = JSON.stringify(person)
    response.end(strPers)

})

//Step 3 : start the server on port no 3000

server.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port no 3000')
})

/*
//Step 1 :  load the http module
const http = require('http')

//Step2 : create a server instance 
const server = http.createServer((request,response)=>{

    //request : recived a request from user
    //response : an empty response that need to be filled with require response

    console.log('request received..')

    //Send the empty response to the client.
    // response.end("response from  server..")

    //send the hello world to the client 
    // response.end('hello world from server..')
    
    // response.end('<h1 style="color : red ; font-family : arial">hello world from server.</h1>')

    //send the JSON object

    const person = {
        name : 'person1',
        age : 13,
        addrs : 'addrs 1',
        phone : '+913773636',
        email : 'abc@gmail.com'
    }

    // response.end(person) will give u error this because it required a string value to be passed
    //convert the person object into a string using JSON.stringify(object_name)

    const perStr = JSON.stringify(person)

    response.end(perStr)
})


//Step 3 : listen port no 3000

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

*/
/*
//Step 1 : load the http module
const http = require('http')
// console.log(http)

//Step 2 : create a server instance 
const server = http.createServer((request,response)=>{
    //request :  received a request from user.
    //response : empty object need to be filled with require response

    console.log('recived request...')

    //send the empty request to the client
    response.end()
})

//step 3 :  start the server on port 3000

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

*/

