const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    email:{
        type: String,
        required: [true, 'Please provide a email']        
    },
    role:{
        type: String,
    }
},
{timestamps: true});

userSchema.methods.isPasswordValid = async function (password)  {
    console.log("compare  ", password , this.password)
    isMatch = await bcrypt.compare(password, this.password)
    console.log("password match ", isMatch)
    return(isMatch)
}

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;