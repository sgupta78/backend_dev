const express = require("express");

const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin",adminAuth);

app.get("/admin/getAllData", (req,res)=>{
    throw new Error;
    res.send("Sent data !");
})

app.get("/admin/deleteData", (req,res)=>{
    res.send("data deleted!");
})

app.get("/user/getData", userAuth, (req,res)=>{
    res.send("user data sent!")

})

app.use("/", (err,req,res,next ) => {
    console.log(err.stack);
    res.status(500).send("something went wrong!");

})
app.listen(3000, () => {
    console.log("app is listning on port 3000");
})