const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from server");
})

app.use("/hello",(req,res)=>{
    res.send("Hello hello server");
})

app.use("/",(req,res)=>{
    res.send("Hello from server / ");
})

app.listen(3000,()=>{
    console.log("app is listning on port 3000");
})