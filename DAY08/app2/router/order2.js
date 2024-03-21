const express = require('express')
const mysql2 = require('mysql2/promise')

//DB connection using promise package 
const db = mysql2.createPool({
    host : '0.0.0.0',
    user : 'root',
    password : '1947',
    database : 'ecommerce'
})

const route = express.Router()

route.get('/',(request, response)=>{

})

route.post('/',(request, response)=>{
    
   /* 
    1. We get the product from cart and add into order table. this should be going throgh the
       sysnchronious fashion. So we use async() await function in orders table.
    
       2. async await uses a promise packed which is used in mysql2

    */ 

    //Closure
    (async()=>{

         //Step 1 : Get the product from cart
         const cartStmt = `
         select 
             c.id as cartId, c.product as productId, p.price as price, c.quantity as quantity
         from 
             cart c inner join product p
         on
             c.product = p.id
         where
             user = ${request.userId}`
         
         const [items] = await db.query(cartStmt)
 
         let totalPrice = 0
        //  console.log(items)
        for(const item of items){
           totalPrice = totalPrice + item['price'] * item['quantity']
        }
        // console.log(totalPrice)
        const date = new Date()
        const orderDate = date.toLocaleDateString()
        // Step 2 : Add the product into order table
            // Step 2.1:
                //Master Table :
                //Add the product into the userorder
                const userOrdrStmt = `
                    insert into userorder
                        ( user, totalprice, paidamount, order_date, status )
                    values
                        (${request.userId}, ${totalPrice},${totalPrice},'${orderDate}', 0 )
                    `
                // console.log(userOrdrStmt)
                const [orders] = await db.query(userOrdrStmt)
                // console.log(orders)
                const orderId = orders['insertId']
                // console.log(orderId)
            //Step 2.2
                //Order table :
                //Add the orderId and user order details into orderdetail table
                for( const item of items){
                    const orderStmt = `
                    insert into orderdetail
                        (orderId, product, price, quantity )
                    values
                        (${orderId}, ${item['productId']}, ${item['price']}, ${item['quantity']})` 
                    
                    await db.query(orderStmt)
                    // console.log(orderStmt)       
                    
                }
        //Step 3 : Delete the product from cart (Cart will be empty)
                const userCartEmpty = `delete from cart where user = ${request.userId}`
                const  [placeOrder] = await db.query(userCartEmpty)
                if(placeOrder.affectedRows != 0){
                    response.send({
                        status : 'success',
                        data : "Congrats..Your order has been placed..!!"
                    })
                }else{
                    response.send({
                        status : 'error',
                        error : "Please add the product into cart..!!"
                    })
                }
                 

                

         response.send()        
    })()    
})

module.exports = route