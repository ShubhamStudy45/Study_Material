//API for signup and signin 
const express = require('express')
const db = require('./db')
const cryptoJs = require('crypto-js')
const createResult = require('./createResult')
const router = express.Router()

router.post('/signup',(request, response)=>{

    const {firstName, lastName, email, password } = request.body


    const encryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `insert into user
                        ( firstName, lastName, email, password )
                        values
                        ('${firstName}','${lastName}','${email}','${encryptPassword}')`
    // response.send(statement)

    db.execute(statement,(error, data)=>{

        // const result = {
        //     status : ''
        // }

        // if(error){
        //     result['status'] = 'error'
        //     result['error'] = error
        // }else{
        //     result['status'] = 'success'
        //     result['data'] = data
        // }
        // response.send(result)

        response.send(createResult(error,data))

    })

})

router.post('/signin',(request, response)=>{

    const  { email, password } = request.body

    const decryptPassword = '' + cryptoJs.SHA256(password)
    const statement = `select 
                        id, firstname, lastname, email, phone, status
                        from user
                        where
                        email = '${email}' and password = '${decryptPassword}'`
    // console.log(statement)
    db.execute(statement,(error,users)=>{
        // response.send(createResult(error,data))
        
        const result = {
            status : ''
        }

        if(error){
            result['status'] = 'error'
            result['error'] = error
        }else{
            
            //To check if user is exist in DB
            if(users.length == 0){
                result['status'] = 'error'
                result['error'] = "User doesn't exist..!!"
            }else{
                result['status'] = 'success'
                // result['data'] = users
                // console.log(users)
                const user = users[0]
                console.log(user)
                result['data'] = {
                    id : user['id'],
                    firstName :user.firstname,
                    lastName : user.lastname,
                    email : user['email'],
                    phone : user['phone'],
                    status : user.status
                }
            }
        }
        response.send(result)
    })
    
})

module.exports = router