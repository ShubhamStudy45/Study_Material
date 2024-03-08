//Category route

//import express
const express = require('express')

const router = express.Router()

// console.log(`${router}`)

router.get('/category',(request, response)=>{

    response.send('list of category')

})

router.post('/category',(request, response)=>{
    response.send('category added..')
    
})

router.put('/category',(request, response)=>{
    response.send('category updated..')
    
})

router.delete('/category',(request, response)=>{
    response.send('category deleted..')
    
})

//export category.js module to the other
module.exports = router