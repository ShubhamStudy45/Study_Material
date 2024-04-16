const express = require("express")
const multer = require("multer")
const db = require("../db")
const utils = require("../utils")
const route = express.Router()

//load multer to upload the file
const upload = multer({ dest: "./image" })

route.get("/", (request, response) => {
  const statement = `select * from user`
  db.execute(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//upload the file
//upload.single -> to give a user to upload a single file
//upload.array -> to give a user to upload a multiple files
//single("photo") -> make sure the key and value pair should be same

route.post("/", upload.single("photo"), (request, response) => {
  const { email, password } = request.body
  const profile = request.file.filename
  console.log("email : ", email)
  console.log("password : ", password)

  //request.file --> will get the file information which is uploaded by user
  //   {
  //     fieldname: 'photo',
  //     originalname: 'p.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     destination: './image',
  //     filename: 'fa5eebac8fa424ab64101571188b3ed7',
  //     path: 'image\\fa5eebac8fa424ab64101571188b3ed7',
  //     size: 1572401
  //   }
  //console.log(request.file)

  //console.log(`fileName : ${request.file.filename}`)

  const statement = `insert into user1( email, password, profile) values ('${email}', '${password}','${profile}')`
  console.log(statement)
  db.execute(statement,  (error, data) => {
    response.send(utils.createResult(error, data))
  })
  //   const statement = `select * from user`
  //   db.execute(statement, (error, data) => {
  //     response.send(utils.createResult(error, data))
  //   })
})

module.exports = route

//47:50
