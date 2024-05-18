const User = require('../models/user')

const login = async (req, res) => {
    const {email, password} = req.body
    const user_obj = await User.findOne({email : email})
    if(user_obj){
        if( await user_obj.isPasswordValid(password)){
            console.log("Login successful")
            res.send("Login successful")
        }else{
            console.log("Login failed")
            res.send("Login failed")
            return res.status(400).json({msg: "Invalid credentials"})
        }
    }
    else{
        console.log("user not found")
        res.send("user not found")
        return res.status(400).json({msg: "User not found"})
    }
}


module.exports = login;