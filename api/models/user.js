const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
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