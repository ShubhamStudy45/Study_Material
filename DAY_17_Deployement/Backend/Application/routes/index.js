const express = require("express")
const utils = require("../utils")

const route = express.Router()

route.get("/", (request, response) => {
  response.send(utils.createResult(null, "welcome to express application"))
})
module.exports = route
