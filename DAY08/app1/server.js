//revision of day 07

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const userRouter = require('./routes/user')
const config = require('./config')
const app = express()

app.use(bodyParser.json())

app.use((request,response,next)=>{

    if(request.url.startsWith('/user/signin')||
    request.url.startsWith('/user/signup')){
        next()
    }else{

        try {
            
            const token = request.headers['token']
            // console.log(token)
            const data = jwt.verify(token, config.secrete)
            // console.log(data)

            request.userId = data['id']
            console.log(request.userId)
            next()
        } catch (ex) {
            // console.log('error')
            response.send({
                status : 'error',
                error : "User is unathorized..!!"
            })
        }

    }
})
app.use('/user',userRouter)

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

















