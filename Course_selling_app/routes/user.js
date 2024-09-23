const {Router} = require("express");

const userRouter = Router();
const {userModel} = require("../db")


userRouter.post('/signup', (req,res)=>{
    res.json({
        message:"signup"
    })
})

userRouter.post('/signin', (req,res)=>{
    res.json({
        message:"signin"
    })
})



userRouter.get("/purchases", (req,res)=>{
    res.json({
        message:"purchase "
    })
})

module.exports= {
    userRouter:userRouter
}