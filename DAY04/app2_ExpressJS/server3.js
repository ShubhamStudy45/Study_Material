//Mysql db connection in express

//load express module
const express = require('express')
//load mysql2 module
const mysql2 = require('mysql2')

//create a express instance 
const app = express()

//create route
app.get('/product',(request, response)=>{
    
    // create a mysql db connection and open it
    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce',
        port : 3306,
    })
    //prepare a query to execute select statement
    const statement = `select * from product;`
    
    connection.query(statement,(isError, products)=>{

        //close the db connection
        connection.end()

        console.log(`Error : ${isError}`)
        console.log(`Products : ${products}`)
        console.log(products)


        // const strProducts = JSON.stringify(products)
        // response.end(strProducts)

        //every time we have to convert the json object into string so express js have a new feature
        //to convert the json object into string called response.send()

        response.send(products)
    })

})


app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})

 
/*
//load express module
const express = require('express')
//load mysql2
const mysql2 = require('mysql2')

//create a express instance
const app = express()

app.get('/product',(request, response)=>{

    //create a mysql connection and open database.

    const connection = mysql2.createConnection({
        host : '0.0.0.0',
        user : 'root',
        password : '1947',
        database : 'ecommerce',
        port : 3306,
    })
    //prepate a statement to create a select query.
    const statement = `select * from product ;`

    connection.query(statement,(isError, products)=>{

        //close db connection 
        connection.end()
        console.log(isError)
        console.log(products)

        const strProduct = JSON.stringify(products)

        response.end(strProduct)
    })

})
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})


*/
