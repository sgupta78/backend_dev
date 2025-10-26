const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

//Signup API for user  
app.post("/signup", async (req, res) => {
    const data = req.body;
    console.log("req.body", data);
    const user = new User(data);
    try {
        await user.save();
        res.send("User saved successfully.");
    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }

})

// API - find by email
app.get("/user", async (req, res) => {
    console.log("email is ", req.body.emailId);
    try {
        const user = await User.find({ emailId: req.body.emailId })
        console.log("user is ", user)
        if (user) {
            res.send({
                message: "user found",
                user: user
            });
        } else {
            res.status(404).send("User not Found");
        }
    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }
});

// API - find by id
app.get("/userid", async (req, res) => {
    try {
        const user = await User.findById(req.body.userid);
        console.log("user is", user);
        if (user) {
            res.send({
                message: "User found",
                user: user
            });
        } else {
            res.status(404).send("User not Found");
        }

    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }
});

// Feed -API (findall)
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find(); //or find({})
        //console.log("users are " + users);
        const names = users.map((user) => {
            return (user.firstName + " " + user.lastName);
        })
        console.log("users are : ", names);
        res.send(names);
    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }
})

// API - Delete a user
app.delete("/user", async (req,res)=>{
    try{      
        await User.findByIdAndDelete(req.body.userid);
        res.send("User deleted succesfully.");
    }catch(err){
        res.status(400).send("Something went wrong"+ err.message);
    }
})

// APi - Update user
app.patch("/user",async (req,res)=>{
    const userid = req.body.userid;
    const data = req.body;
    try{
           const user = await User.findByIdAndUpdate({_id : userid} , data,{
                returnDocument : "before"
            });
            console.log(user);
            res.send("User Updated Succesfully.")

    }catch(err){
        res.status(400).send("Something went wrong" + err.message);
    }
})
connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(7777, () => {
            console.log("app is listning on port 7777");
        })
    })
    .catch((err) => {
        console.log("Database connection not  established");
    })

