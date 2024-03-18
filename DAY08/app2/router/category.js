const express = require('express')
const db = require('../db')
const utils = require('../utils')
const route = express.Router()

route.get('/:id',(request, response)=>{

    const { id } = request.body
    const statement = `select * from category where id = '${id}'`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})

route.post('/',(request, response)=>{

    const { title, description } = request.body
    const statement = `insert into category
                        ( title, description )
                        values
                        ('${title}','${description}')`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
route.put('/:id',(request, response)=>{

    const { id } = request.body
    const { title, description } = request.body

    const statement = `update category
                        set
                        title = '${title}' and description = '${description}' 
                        where id = '${id}'`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
route.delete('/:id',(request, response)=>{

    const { id } = request.body
    const statement = `delete from category where id = '${id}'`
    db.execute(statement,(error, data)=>{
        response.send(utils.createResult(error,data))
    })

})
module.exports = route