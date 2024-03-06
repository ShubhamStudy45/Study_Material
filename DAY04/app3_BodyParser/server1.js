//POST method with Body parser and Mysql2 connection

const express = require('express')
const bodyParser = require('body-parser')
const mysql2 = require('mysql2')

const app = express()

const StrbodyParser = bodyParser.json()
app.use(StrbodyParser)
app.get('/',(request, response)=>{

    console.log(`Method = ${request.method}`)
    console.log(`Url = ${request.url}`)
    console.log('---------------------')
    response.send('response sent from server')
})



app.post('/',(request, response)=>{

    console.log(`Method = ${request.method}`)
    console.log(`Url = ${request.url}`)
    // console.log(`body-parser = ${request.body}`) it will show you as undefined because we have
    //  to import body-parser inside in module
    console.log(request.body)
    console.log('---------------------')


    //destructuring of request body
    const {title, description, price, category, Company } = request.body

    //open a db connection

    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce',
    })

    //create a statement and open and db connection
    const statement = `insert into product 
                        (title, description, price, category, company )
                        values
                        ('${title}','${description}',${price},${category},${Company});`


    // console.log(statement)
    connection.query(statement,(isError, products)=>{

        //close the db connection

        connection.end()

        console.log(isError)
        console.log(products)
        response.send('response sent from server')

    })

    
})


app.listen(3000,'0.0.0.0',()=>{

    console.log('server started on port 3000')
})