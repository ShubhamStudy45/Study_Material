//Revision

const express = require('express')
const mysql2 = require('mysql2')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.get('/product',(request, response)=>{

    //open connection 

    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce',
    })

    const statement = `select * from product;`

    connection.query(statement, (error, products)=>{

        //close connectipn
        connection.end()
        if(error){
            console.log(`Error : ${error}`)
            response.send(error)
        }else{
            console.log(`Data : ${products}`)
            response.send(products)
        }


    })

})

app.post('/product',(request, response)=>{

    
    //create a desructuring 

    const  { title, discription, price } = request.body
    //open connnection 
    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce',
    })

    //prepare a query to execute
    const query = `insert into product 
                    (title, description, price )
                    values
                    ('${title}','${discription}',${price});`
    // console.log(query)

    connection.query(query, (error, result)=>{
        //close connection

        connection.end()
        if(error){
            console.log(error)
            response.send(error)
        }else{
            console.log(result)
            response.send(result)
        }
    })
    
})
app.put('/product',(request, response)=>{

    
})
app.delete('/product',(request, response)=>{

    
})
app.listen(3000,'0.0.0.0',()=>{
    console.log('Sever started on 3000')
})