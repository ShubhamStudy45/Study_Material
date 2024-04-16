const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")




const indexRoute = require("./routes/index")
const userRoute = require("./routes/user")
const app = express()

app.use(cors("*"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user", userRoute)
app.use("/index", indexRoute)


app.get("/", (request, response) => {
  response.send()
})

app.listen(4000, "0.0.0.0", () => {
  console.log("server started on port 4000")
})
