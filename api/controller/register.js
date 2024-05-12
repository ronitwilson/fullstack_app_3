const bcrypt = require('bcrypt')
const User = require('../models/user')

const register = async (req, res) => {
    const {email, password, role, name} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user_obj = await User.create({email, password:hashedPassword, role, name})
    console.log(" request received", email, password, role, name)
    res.send("register request received")
}

module.exports = register;