const express = require('express')
const db = require('../db')
const utils = require('../utils')
const route = express.Router()

route.get('/',(request, response)=>{
    

    const statement = `select crt.id as cartid, p.title as "product name", co.title as "brand", 
    p.description as "product description", p.price as "product price", 
    crt.quantity as "quantity" from cart crt inner join 
    product p on p.id = crt.product 
    inner join 
    user us on us.id = crt.user 
    inner join company co on p.company = co.id
    where user = ${request.userId}`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error, data))
    })
})

route.post('/',(request, response)=>{
    const { product, quantity } = request.body

    const statement = `insert into cart (user, product, quantity )
                        values
                        (${request.userId},${product},${quantity})`
    db.execute(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})

route.patch('/',(request, response)=>{

    const { quantity } = request.body

    const statement = `update cart set quantity = ${quantity}
                        where
                        user = ${request.userId}`

    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error, data))
    })
})
route.delete('/',(request, response)=>{
    
    const statement = `delete from cart where user = ${request.userId}`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })
})


module.exports = route