const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {

    const user = new User({
        firstName: "Sharukh",
        lastName: "bachan",
        emailId: "sharukh@gupta.com",
        password: "sharukh@123"
    });

    try {
        await user.save();
        res.send("User saved successfully.");
    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }

})

app.get("/getUser", async (req, res) => {
    try {
        const users = await User.find();
        console.log("users are " + users);
        const firstnames = users.map((user) => {
            const data = {
                first: user.firstName,
                lastName: user.lastName,
                name: user.firstName + user.lastName
            }
            return data.name;
        })
        console.log("firstnames : ", firstnames);
        res.send(firstnames);
    } catch (err) {
        res.status(400).send("Some error occured " + err.message);
    }
})



connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(3000, () => {
            console.log("app is listning on port 3000");
        })
    })
    .catch((err) => {
        console.log("Database connection not  established");
    })

