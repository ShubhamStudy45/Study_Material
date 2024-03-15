const express = require('express')
const db = require('../db')
const cryptoJs = require('crypto-js')
const utils = require('../utils')
const route = express.Router()

route.post('/signup',(request, response)=>{

    const { firstName, lastName, email, password } = request.body

    const encryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `insert into user
                        (firstname, lastname, email, password, status)
                        values
                        ('${firstName}','${lastName}','${email}','${encryptPassword}', 0)`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })
})

route.post('/signin',(request, response)=>{
    
    const { email, password } = request.body

    const decryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `select id, firstname, lastname, email, password,phone, status
                        from 
                        user
                        where
                        email = '${email}' and password = '${decryptPassword}'`
    // console.log(statement)
    db.execute(statement,(error, users)=>{

        const result = {
            status : ''
        }
        if(error){
            result['status'] = 'error'
            result['error'] = error
        }else{
            if(users.length <= 0){
                result['status'] = 'error'
                result['error'] = "User doesn't exist..!!"
            }else{

                const user = users[0]

                // console.log(user.status)
                if(user['status'] == 0){
                    result['status'] = 'error'
                    result['error'] = "Account has not been activated. Pls activated..!!"
                }else if(user['status'] == 2){
                    result['status'] = 'error'
                    result['error'] = "Account has been blocked. Pls contact administration..!!"
                }else if(user.status == 1){

                    result['status'] = 'success'
                    result['data'] = {
                        id : user.id,
                        firstname : user['firstname'],
                        lastname : user['lastname'],
                        email : user['email'],
                        phone : user['phone'],
                        status : user.status
                    }
                }


            }
        }
        response.send(result)
    })
})

route.patch('/admin/:id',(request, response)=>{

    const { id } = request.params

    const { status } = request.body

    const statement = `update user set status = ${status} where id = ${id}`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })
})

module.exports = route