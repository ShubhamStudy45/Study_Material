// user callback function i.e middleware function

const express = require('express')
const mysql2 = require('mysql2')

const app = express()

//Middleware function 

function logFunction(request, response, handler){

    console.log('inside the log function')
    console.log(`Method = ${request.method}`)
    console.log(`Url = ${request.url}`)
    console.log('------------------------')


    //call the next handler
    handler()
}

//call logFunction before the route function
app.use(logFunction)


//route
app.get('/',(request, response)=>{
    console.log('inside the handler / GET')
    response.send()

})
app.post('/',(request, response)=>{

    console.log('inside the handler / POST')
    // console.log(`Method = ${request.method}`)
    // console.log(`Url = ${request.url}`)
    // console.log('------------------------')

    response.send()

})
app.put('/',(request, response)=>{

    console.log('inside the handler / PUT')

    // console.log(`Method = ${request.method}`)
    // console.log(`Url = ${request.url}`)
    // console.log('------------------------')
    response.send()

})
app.delete('/',(request, response)=>{

    console.log('inside the handler / DELETE')
    
    // console.log(`Method = ${request.method}`)
    // console.log(`Url = ${request.url}`)
    // console.log('------------------------')
    response.send()

})
app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})