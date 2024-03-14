const express = require('express')
const crytoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const db = require('../db')
const config = require('../config')
const utils = require('../utils')
const route = express.Router()


route.post('/signup',(request,response)=>{

    const { firstName, lastName, email, password } = request.body

    const encryptPassword = '' + crytoJs.SHA256(password)
    const statement = `insert into user
                        (firstName, lastname, email, password)
                        values
                        ('${firstName}','${lastName}','${email}','${encryptPassword}')`
    db.execute(statement,(error,data)=>{

        response.send(utils.createResult(error,data))
    })
})

route.post('/signin',(request, response)=>{

    const { email , password } = request.body

    // console.log(jwt)

    const decryptPassword = '' + crytoJs.SHA256(password)
    const statement = `select id, firstname, lastname, email, phone, status
                        from user
                        where
                        email = '${email}' and password = '${decryptPassword}'`
    db.execute(statement,(error,users)=>{
        
        const result = {
            status : ''
        }
        if(error){
            result['status'] = 'error'
            result['error'] = error
        }else{

            // console.log(users.length)
            if(users.length <= 0){
                result['status'] = 'error'
                result['error'] = "User doesn't exist..!!"
            }else{

                const user = users[0]
                const payload = {
                    id : user['id']
                }
                const token = jwt.sign(payload,config.secrete)
                result['status'] = 'success'
                result['data'] = {
                    token : token,
                    firstName : user.firstname,
                    lastName : user['lastname'],
                    email : user.email,
                    phone : user['phone'],
                    status : user['status']
                }

            }
        }

        response.send(result)


    })
})

route.get('/profile/',(request,response)=>{
    
    // const { id } = request.params

    // const token  = request.headers['token']
    // const payload = jwt.verify(token,config.secrete)

    // const userId = payload['id']
    const statement = `select firstname, lastname, email, phone, status from user
                        where
                        id = ${request.userId}`
    db.execute(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })

})
module.exports = route