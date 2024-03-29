const express = require('express')
const db = require('../db')
const utils = require('../utils')
const route = express.Router()

route.get('/',(request, response)=>{
    const statement = `select * from product`
    db.execute(statement, (error, data)=>{
        response.send(utils.createResult(error,data))
    })
})
route.post('/',(request, response)=>{
    const { title, description, price, category, company } = request.body

    const stmt = `
    insert into product
        (title, description, price, category, company)
    values
        ('${title}','${description}',${price},${category},${company})`
   console.log(stmt)
    db.execute(stmt,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
    
})
module.exports = route