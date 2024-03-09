//Category module

const express = require('express')
const db = require('../db')
const router = express.Router()


router.get('/',(request,response)=>{

    //Prepare a statement to get all category
    const statement = `select * from category`

    // console.log(typeof createResult)
    //open a db connection
    db.query(statement,(error, data)=>{
        // createResult(error,data)
        
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})

router.post('/',(request,response)=>{

    //create a destructure to get the body item 
    const { title, description } = request.body
    //prepare a statement for insert the new category
    const statement = `insert into category
                        (title, description )
                        values
                        ('${title}', '${description}')`
    // console.log(statement)
    db.query(statement, (error,data)=>{
        response.send(data)
    })
    
})
router.put('/:id',(request,response)=>{

    //get the id from request paramater
    const { id } = request.params

    const { title, description } = request.body
    // response.send('category updated ')

    const statement = `update category 
                        set
                        title = '${title}', description = '${description}'
                        where
                        id = ${id}`
    // response.send(statement)
    db.query(statement, (error, data)=>{
        response.send(data)
    })
})
router.delete('/:id',(request,response)=>{
    // response.send('category deleted..')

    const { id } = request.params

    const statement = `delete from category
                        where 
                        id = ${id}`
    // response.send(statement)
    db.query(statement, (error, data)=>{
        response.send(data)
    })
})


//export router for other module
module.exports = router