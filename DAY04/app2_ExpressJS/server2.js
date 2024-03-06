//Express with rout function

//import express module 
const express = require('express')
//create an instance of express
const app = express()


//Route
app.get('/product',(request, response)=>{
    console.log('select * from product ...')
    response.end('response sent from express')
})

app.post('/product',(request, response)=>{
    console.log('inside in /POST method')
    response.end()
})

app.put('/product',(request, response)=>{
    console.log('inside in /PUT method')
    response.end()
})
app.delete('/product',(request, response)=>{
    console.log('inside in /Delete method')
    response.end()

})
//listen on port no 3000
app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})