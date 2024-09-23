const express = require('express');
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user");
const {adminRouter} = require("./routes/admin");
const {courseRouter} = require("./routes/course")
const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/course",courseRouter)


async function main(){
    await mongoose.connect("mongodb+srv://kalyan_tr:VILOKeCaTw0Z8Twy@cohort.9lrvzsy.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listening on port 3000")
}
