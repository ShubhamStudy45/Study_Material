//Json web token to provide the security of your dat

//import the jwt token 
const jwt = require('jsonwebtoken')

const secrete = '232cdfere32323cds'
function client(){

    const data = {
        id : 1,
        firstName : 'shubham',
        email : 'sable@gmail.com',
        password : '123'
    }
   const token =  jwt.sign(data,secrete)
   console.log('token = ',token)
    
}

// client()

function server(){

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoic2h1YmhhbSIsImVtYWlsIjoic2FibGVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE3MTAwOTg1NTB9.0xhza9Cwp1NSDRJ8HI4NWOlVdlEn1ONV017SoxdTJGU'
   const data = jwt.verify(token,secrete)
   console.log('Data : ',data)
}

server()