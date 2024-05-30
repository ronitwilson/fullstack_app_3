const logout = async(req,res) => {
    return res.cookie('token', '').status(200).json({msg: "logged out"})
}

module.exports = logout