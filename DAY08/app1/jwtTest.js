//Jsonwebtoken functionality (security)

const jwt = require('jsonwebtoken')

const secretKey = 'dfkdnfkng3$##$#GVE#$$T#GG#$@@@@V@$VRRVSDddse[334434'
function client(){

    const payload = {
        id : 1,
        firstname : 'shubham',
        email : 'abc@gmail.com',
        password : '12345'
    }

    const token = jwt.sign(payload,secretKey)
    console.log(token)
}

// client()

function server(){

    const data = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoic2h1YmhhbSIsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE3MTA0Mzk5MTV9.4GkFO1t_mhsHwmnZseC_KHWfkcZoPiuF73ZrvWqqf9I',secretKey)

    console.log(data)


}
server()