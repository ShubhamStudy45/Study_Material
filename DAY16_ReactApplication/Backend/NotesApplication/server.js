const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const secrete = require("./secrete")
const app = express()
app.use(cors("*"))
app.use(bodyParser.json())
//Application Routes
const userRoutes = require("./routes/user")
const userNotes = require("./routes/notes")

app.use((request, response, next) => {
  console.log(request.url)
  if (
    request.url.startsWith("/user/signin") ||
    request.url.startsWith("/user/signup")
  ) {
    next()
  } else {
    try {
      const token = request.headers["token"]
      // console.log(token)
      const payload = jwt.verify(token, secrete.secrete)
      // console.log(payload)
      request.userid = payload.id
      // console.log(request.userid)
      next()
    } catch (ex) {
      response.send({
        status: "error",
        error: "Unathorized access..!!",
      })
    }
  }
})
app.use("/user", userRoutes)
app.use("/notes", userNotes)

app.listen(4000, "0.0.0.0", () => {
  console.log("server started on port 4000")
})
