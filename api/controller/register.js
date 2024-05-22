const bcrypt = require('bcrypt')
const User = require('../models/user')

const register = async (req, res) => {
    const {email, password, role, name} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const user_obj = await User.create({email, password:hashedPassword, role, name})
        console.log(" request received", email, password, role, name)
        return res.status(200).json({msg: "Please login"})
    }
    catch (error){
        console.log("error", error)
        return res.status(400).json({msg: "User already exists"})
    }
}

module.exports = register;