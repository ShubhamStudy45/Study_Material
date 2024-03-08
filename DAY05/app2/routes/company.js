//company module
const express = require('express')

//create a routes for company and export it

const router = express.Router()

router.get('/company',(request, response)=>{
    response.send('list of company')
})
router.post('/company',(request, response)=>{
    response.send('company added')
})
router.put('/company',(request, response)=>{
    response.send('company updated..')
})
router.delete('/company',(request, response)=>{
    response.send('company deleted..')
})
module.exports = router