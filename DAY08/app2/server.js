const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')
const userRouter = require('./router/user')
const categoryRouter = require('./router/category')
const companyRouter = require('./router/category')
const productRouter = require('./router/product')
const cartRouter = require('./router/cart')
// const orderRouter = require('./router/order')
const order2Router = require('./router/order2')

const app = express()

app.use(bodyParser.json())
app.use(cors('*'))
// app.use(bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }))

app.use((request, response,next)=>{

    if(request.url.startsWith('/user/signin') ||
    request.url.startsWith('/user/signup')||
    request.url.startsWith('/user/admin/')){

        next()
    }else{

        const token = request.headers['token']
        // console.log(token)
        try {
            
            const data = jwt.verify(token,config.secrete)
            const payload = data['id']
            // console.log(data)
            request.userId = payload
            next()
        } catch (ex) {
            response.send({
                status : 'error',
                error : "Unathorized access..!!"
            })
        }

    }
})
app.use('/user',userRouter)
app.use('/category',categoryRouter)
app.use('/company',companyRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
// app.use('/order',orderRouter)
app.use('/order',order2Router)
app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})

//1:26:34