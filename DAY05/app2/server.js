//Basic structure of ecommerce application using route and routers

const express = require('express')
const bodyParser = require('body-parser')
// console.log(bodyParser)
//import the category routes 
const routeCategory = require('./routes/category')
const routerCompany = require('./routes/company')
//create a application server for you
const app = express()

//We need to create a different routes for 
/*
USER
PRODUCT
COMPANY
CATEGORY
CART
ORDER
*/

//middleware function
app.use(bodyParser.json('*'))
app.use(routeCategory)
app.use(routerCompany)
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})




