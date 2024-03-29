const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')




const productRouter = require('./routers/product')
const app = express()

app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/product',productRouter)
app.listen(3000, '0.0.0.0',(request, response)=>{
    console.log('server started on port 3000')
})