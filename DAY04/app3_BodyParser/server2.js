//Get Method for body parser and db connection

const express = require('express')
const mysql2 = require('mysql2')
const app = express()


app.get('/',(request, response)=>{

    const statement = `select * from product ;`

    //open db connection 
    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce'
    })

    //execute a statement in connection
    connection.query(statement,(error, result)=>{

        connection.end()

        if(error){
            console.log(`error = ${error}`)
        }else{
            console.log('data = ', result)
        }
        response.send(result)
    })
    
})
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})