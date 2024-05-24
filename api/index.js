const express = require("express");
const cors = require('cors');
const connectDB = require('./db/connect');
const register = require('./controller/register');
const login = require('./controller/login');
const morgan = require('morgan');
const profile = require('./controller/profile');
const cookieParser = require('cookie-parser');

const app = express()
const port = 3001

app.use(express.json());
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}));

app.use(morgan('dev'));

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.use(cookieParser())

app.get("/profile", profile)

app.post("/login", login)

app.post("/register", register)

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  const start = async () => {
    try {
        await connectDB();
        console.log('chat app connected to database');
    } catch (error) {
        console.log(error);
    }
  }

  start();