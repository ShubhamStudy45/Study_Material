//Revision of Day 04

const express = require('express')

const app = express()

app.get('/',(request, response)=>{

    console.log('Select * from ....')
    response.send('response sent from express')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on 3000')
})









