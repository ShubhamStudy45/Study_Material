//Revision of Day 06
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const userRoutes = require('./routes/user')

const app = express()



app.use(bodyParser.json())

app.use((request,response,next)=>{

    const token = request.headers['token']

    console.log(token)
    if(request.url.startsWith('/user/signin')||
    request.url.startsWith('/user/signup')){
        next()
    }else{

        try{

            const payload = jwt.verify(token, config.secrete)
            request.userId = payload['id']
            console.log(request.userId)
            next()
        }catch(ex){
            response.send({
                status : 'error',
                error : 'unathorized access..!!'
            })
        }
    }
    
    

})

//middleware function
app.use('/user',userRoutes)
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

