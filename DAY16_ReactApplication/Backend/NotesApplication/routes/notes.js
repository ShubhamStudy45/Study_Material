const express = require("express")

const db = require("../db")
const utils = require("../utils")
const route = express.Router()

route.get("/get-notes/", (request, response) => {
  // const { userid } = request.params

  const statement = `select * from notes where userid = ${request.userid}`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
route.post("/add-notes/", (request, response) => {
  const { title, contents } = request.body

  const statement = `
  insert into notes
        (title, contents, userId)
    values
        ('${title}', '${contents}', ${request.userid})`

  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
route.delete("/delete-note/:noteid", (request, response) => {
  const { noteid } = request.params
  const statement = `delete from notes where userid=${request.userid} and id=${noteid} `
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
route.put("/edit-note/:noteid", (request, response) => {
  const { noteid } = request.params
  const { title, contents } = request.body
  const statement = `update notes set title = '${title}', contents = '${contents}' where id=${noteid}`

  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})
module.exports = route
