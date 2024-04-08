const express = require("express")

const db = require("../db")
const utils = require("../utils")
const route = express.Router()

route.get("/get-notes/:userid", (request, response) => {
  const { userid } = request.params

  const statement = `select * from notes where userid = ${userid}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
route.post("/add-notes/:userid", (request, response) => {
  const { title, contents } = request.body
  const { userid } = request.params

  const statement = `
  insert into notes
        (title, contents, userId)
    values
        ('${title}', '${contents}', ${userid})`

  db.execute(statement,(error,data)=>{
    response.send(utils.createResult(error,data))
  })
})
module.exports = route
