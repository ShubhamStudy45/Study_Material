//Category route

//import express
const express = require('express')
const db = require('../db')

const router = express.Router()

// console.log(`${router}`)

router.get('/category',(request, response)=>{

    //prepare a statement for get the category
    const statement = `select * from category `

    db.execute(statement,(error, data)=>{
        response.send(data)
    })
    

})

router.post('/category',(request, response)=>{
    
    const { title, description } = request.body
    //prepare a statement to add the category 
    const statement = `insert into category 
                        (title, description )
                        values
                        ('${title}', '${description}')`
    // console.log(statement)
   
    db.execute(statement,(error, data)=>{
        response.send(data)
    })

})

router.put('/category/:id',(request, response)=>{
    // response.send('category updated..')

    const { id } = request.params
    const { title, description } = request.body

    //prepare a statement to execute a update query
    const statement = `update category
                        set
                        title = '${title}', description ='${description}'
                        where
                        id = ${id}`
    // console.log(statement)
    // response.send()

    db.execute(statement,(error, data)=>{
        response.send(data)
    })

    
})

router.delete('/category',(request, response)=>{
    response.send('category deleted..')
    
})

//export category.js module to the other
module.exports = router