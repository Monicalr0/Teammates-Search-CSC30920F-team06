'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        minLength:1,
        unique:true,
        trim: true
    },
    password:{
        type:String,
        required: true,
        minLength: 3
    },
    About:{
        type:String,
        default: "This user hasn't input about yet."
    },
    Rate:{
        type:Number,
        default: 0
    },
    Language:{
        type:String,
        default: "English"
    },
    Level:{
        type:String,
        default:""
    },
    PlayStyle:{
        type:String,
        default:""
    },
    PlayTime:{
        type:Number,
        default: 0
    },
    ReportedTime:{
        type:Number,
        default: 0
    },
    PlayedGame:{
        type:String,
        default: ""
    }
})

userSchema.pre('save', function(next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.statics.findByNamePassword = function(username, password) {

    // First find the user by their username
    return User.findOne({ username: username }).then((user) => {
        if (!user) {
            return Promise.reject()
        }
        // if the user exists, make sure their password is correct
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    resolve(user)
                } else {
                    reject()
                }
            })
        })
    })
}

const User = mongoose.model('User', userSchema)
module.exports = { User }