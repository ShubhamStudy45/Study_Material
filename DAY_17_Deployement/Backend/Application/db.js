const mysql2 = require("mysql2")
const pool = mysql2.createPool({
  host: "0.0.0.0",
  user: "root",
  database: "ecommerce",
  password: "1947",
})

module.exports = pool
