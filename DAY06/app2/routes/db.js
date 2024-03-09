//create db pool connection and avaiable to all module

const mysql2 = require('mysql2')
const pool = mysql2.createPool({
    host : 'localhost',
    user : 'root',
    password : '1947',
    database : 'ecommerce',
})

module.exports = pool