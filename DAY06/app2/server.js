//API for Signup and Signin
const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')

const app = express()


app.use(bodyParser.json())

app.use('/user',userRoutes)
app.get('/',(request, response)=>{
   response.send('welcome to ecommerce application..')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})