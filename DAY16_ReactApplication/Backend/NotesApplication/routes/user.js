const express = require("express")
const cryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")
const db = require("../db")
const utils = require("../utils")
const secrete = require("../secrete")
const route = express.Router()

route.post("/signin", (request, response) => {
  const { email, password } = request.body
  const decryptPass = "" + cryptoJs.SHA256(password)
  const statement = `select * from user where email = '${email}' and password = '${decryptPass}'`
  // console.log("statement signin : ", statement)
  // console.log(decryptPass)
  console.log(password)
  db.execute(statement, (error, users) => {
    const result = {
      status: "",
    }

    if (error) {
      result["status"] = "error"
      result["error"] = error
    } else {
      const user = users[0]
      // console.log(users.length)
      // console.log("user status : ", user["status"])
      if (users.length == 0) {
        result["status"] = "error"
        result["error"] = "user doesn't exist or check email and password..!!"
      } else {
        if (user["status"] == 0) {
          result["status"] = "error"
          result["error"] = "user does not verified account..!!"
        } else if (user["status"] == 2) {
          result["status"] = "error"
          result["error"] =
            "user account has suspended. Please contact administrator..!!"
        } else {
          const payload = {
            id: user["id"],
          }

          const token = jwt.sign(payload, secrete.secrete)
          console.log("backend token : ", token)
          result["status"] = "success"
          result["data"] = {
            token: token,
            firstName: user["firstName"],
            lastname: user.lastName,
            email: user["email"],
            phone: user.phone,
            status: user["status"],
          }
        }
      }
    }
    response.send(result)
  })
})

route.post("/signup", (request, response) => {
  const { firstName, lastName, email, password } = request.body
  const encryptPass = "" + cryptoJs.SHA256(password)
  const statement = `
  insert into 
    user
        (firstname, lastname, email, password, status)
    values
        ('${firstName}','${lastName}','${email}','${encryptPass}',0)`

  console.log("backend signup:", statement)
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
route.get("/profile", (request, response) => {
  const statement = `select * from user where id = ${request.userid}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
module.exports = route
