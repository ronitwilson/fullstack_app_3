const User = require('../models/user')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {email, password} = req.body
    const user_obj = await User.findOne({email : email})
    if(user_obj){
        if( await user_obj.isPasswordValid(password)){
            console.log("Login successful")
            const token = jwt.sign({userName: user_obj.name, userId: user_obj._id}, process.env.JWT_SECRET)
            res.cookie('token', token, {sameSite:'None',secure:true}).status(201).json({id: user_obj._id});
        }else{
            console.log("Login failed")
            res.send("Login failed")
            return res.status(400).json({msg: "Invalid credentials"})
        }
    }
    else{
        console.log("user not found")
        return res.status(400).json({msg: "User not found"})
    }
}


module.exports = login;