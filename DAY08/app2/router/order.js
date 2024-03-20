const express = require('express')
const moment = require('moment')
// const db = require('../db')

const utils = require('../utils')

//db connection for order (async await uses a promise)
const mysql2 = require('mysql2/promise')
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

    //async-await : using async-await we can perform the job in asynchronous fashion but sequentially

    //closure
    (async()=>{
    //step 1 : get the product from cart
    const cartStatement = `
        select 
            c.id as cartId, c.product as productId, p.price as productPrice, c.quantity as quantity
        from
            cart c inner join product p
        on
            c.product = p.id
        where
            user = ${request.userId}`
    //await :  wait till the execute is going on

    const [items] = await db.query(cartStatement)
    // console.log(items)

    let total = 0

   for (const item of items) {
    //  console.log('productPrice = ',item['productPrice'], 'quantity = ',item['quantity'] )
     total = total + item['productPrice'] * item['quantity']
   }

    //console.log(total)
   const date = moment().format()
    //const currentdate = date.slice(0,10)
    //step 2 : add these product to an order
    const orderStatement = `
        insert into 
            userorder
                (user, totalprice, paidamount, order_date, status )
            values
                (${request.userId},${total},${total},'${date}',0)`
    const [userOrder] = await db.query(orderStatement)
    // console.log(userOrder.insertId)
    const orderId = userOrder['insertId']
    // console.log(orderId)
    
    for(const item of items){

        const orderdetailsStmt = `
            insert into
                orderdetail
                    (orderid, product, price, quantity)
                values
                    (${orderId},${item['productId']},${total}, ${item['quantity']})`
        
        await db.query(orderdetailsStmt)
    }
    //delete the item from the cart
    const deleteCartItem = `delete from cart where user = ${request.userId}`

    const [deleteData] = await db.query(deleteCartItem)
    // response.send()
    if(deleteData.affectedRows != 0){

        response.send({
            status : 'success',
            success : "Order has been placed..!!"
        })
    }else{
        response.send({
            status : 'error',
            error : 'Pls try again later sometime..!!'
        })
    }

    })()
    
})


module.exports = route