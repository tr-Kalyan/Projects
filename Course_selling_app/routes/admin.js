const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post('/signup', (req,res)=>{
    res.json({
        message:"signup"
    })
})

adminRouter.post('/signin', (req,res)=>{
    res.json({
        message:"signin"
    })
})

adminRouter.post("/", (req,res)=>{
    res.json({
        message:"purchase "
    })
})

adminRouter.put("/course", (req,res)=>{
    res.json({
        message:"purchase "
    })
})

adminRouter.get("/course", (req,res)=>{
    res.json({
        message:"purchase "
    })
})

module.exports= {
    adminRouter:adminRouter
}
