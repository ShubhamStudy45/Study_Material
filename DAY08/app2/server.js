const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./router/user')
const app = express()

app.use(bodyParser.json())
app.use(cors('*'))
app.use(bodyParser.urlencoded())
app.use('/user',userRouter)

app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})

//47:30