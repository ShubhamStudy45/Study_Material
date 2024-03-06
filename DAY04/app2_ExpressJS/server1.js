//import express
const express = require('express')

// console.log(express)
//create a express instance 
const app = express()

//listen port no 3000
app.listen(3000,'0.0.0.0',()=>{
    console.log('Server started on port 3000')
})