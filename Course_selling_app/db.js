const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const  userSchema = new Schema({
    email:{
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
        maxLength:50}
})

const adminSchema = new Schema({
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
        maxLength:50}
})

const courseSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },

    description:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true
    },
    imageURL:{
        type:String,

    },
    createdId:{
        type:ObjectId,
        required:true
    }
})

const purchaseSchema = new Schema({
    courseId:{type:ObjectId},
    courseId:{type:ObjectId}
})


const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema)


module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}


