//Revision of Day 06
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/user')

const app = express()



app.use(bodyParser.json())

app.get('/',(request, response)=>{

    const { token } = request.params

    console.log(token)

    response.send()
})

//middleware function
app.use('/user',userRoutes)
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

//52:21