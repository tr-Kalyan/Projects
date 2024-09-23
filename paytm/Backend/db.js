const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://kalyan_tr:VILOKeCaTw0Z8Twy@cohort.9lrvzsy.mongodb.net/')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lasttName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50}});

const User = mongoose.model('User',userSchema);


module.exports = {User};