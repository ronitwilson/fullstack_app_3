const express = require("express");
const cors = require('cors');

const app = express()
const port = 3001

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.post("/login", (req,res) => {
    const {email, password} = req.body
    console.log("login request received", email, password)
    res.send("Login request received")
})

app.post("/register", (req,res) => {
    const {email, password, role, name} = req.body
    console.log("login request received", email, password, role, name)
    res.send("register request received")
})

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })