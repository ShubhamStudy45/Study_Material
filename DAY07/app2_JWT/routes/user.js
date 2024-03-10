const express = require('express')
const cryptoJs = require('crypto-js')

//import jsonweb token to provide the security to user data
const jwt = require('jsonwebtoken')

const secrete = require('../secreteKey')
const db = require('../db')
const createResult = require('../createResult')
const route = express.Router()


route.post('/signup',(request, response)=>{

    const { firstName, lastName, email, password } = request.body

    const encryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `insert into user
                        (firstName, lastName, email, password )
                        values
                        ('${firstName}','${lastName}','${email}','${encryptPassword}')`
    // console.log(statement)

    db.execute(statement,(error, result)=>{

        response.send(createResult(error,result))

    })
    
})

route.post('/signin',(request, response)=>{

    const { email, password } = request.body

    const decryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `select id, firstName, lastName, email, phone
                        from user
                        where email = '${email}' and password = '${decryptPassword}'`
    // response.send(statement)
    db.execute(statement,(error, users)=>{

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
                const userId = user.id
            
                const token = jwt.sign(userId,secrete)
                // console.log(token)
                result['status'] = 'success'
                result['data'] = {
                    token : token,  
                    firstName : user.firstName,
                    lastName : user['lastName'],
                    email : user.email,
                    phone : user['phone']
                }

            }

            
        }
        response.send(result)
    })
})
module.exports = route