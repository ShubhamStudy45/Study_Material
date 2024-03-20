const express = require('express')
const db = require('../db')
const utils = require('../utils')
const route = express.Router()

route.get('/',(request, response)=>{

    // const { id } = request.body
    const statement = `select * from product`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})

route.post('/',(request, response)=>{

    const { title, description, price, category, company } = request.body
    const statement = `insert into product
                        ( title, description, price, category, company )
                        values
                        ('${title}','${description}',${price},${category},${company})`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
route.put('/:id',(request, response)=>{

    const { id } = request.body
    const { title, description, price, category, company } = request.body

    const statement = `update product
                        set
                        title = '${title}', description = '${description}, price = ${price}, category = ${category}, company = ${company}' 
                        where id = '${id}'`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
route.delete('/:id',(request, response)=>{

    const { id } = request.body
    const statement = `delete from product where id = '${id}'`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
module.exports = route