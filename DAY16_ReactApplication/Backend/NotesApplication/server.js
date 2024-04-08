const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
//Application Routes
const userRoutes = require("./routes/user")
const userNotes = require("./routes/notes")

app.use("/user", userRoutes)
app.use("/notes", userNotes)

app.listen(4000, "0.0.0.0", () => {
  console.log("server started on port 4000")
})
