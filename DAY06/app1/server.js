//Revision of day 05

//Basic api for ecommerce application
//import express
const express = require('express')
const bodyParser = require('body-parser')

const routerCategory = require('./routes/category')
// const createResult = require('./createResults')

//create a express instance or create a server instance 
const app = express()

app.use(bodyParser.json())
//create a routes for user,product, company and category

app.use(('/category'),routerCategory)

app.get('/',(request, response)=>{
    response.send('Welcome to the commerce application')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})