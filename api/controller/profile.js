const jwt = require('jsonwebtoken')

const profile = async (req, res) => {
const token = req.cookies.token
if(!token){
    return res.status(401).json({msg: "Unauthorized"})  
}
try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    console.log("decoded ", decoded)
    return res.status(200).json({decoded})
    }
catch (error) {
    console.log("error ", error)
    return res.status(401).json({msg: "Unauthorized"})
    }
}

module.exports = profile;