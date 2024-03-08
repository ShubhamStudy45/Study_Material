//Basic structure of ecommerce application using route and routers

const express = require('express')
//import the category routes 
const routeCategory = require('./routes/category')
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
app.use(routeCategory)

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})




