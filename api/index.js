const express = require("express");

const app = express()
const port = 3001

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.post("/login", (req,res) => {
    const {email, password} = req.body
    res.send("Login request received")
})

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })