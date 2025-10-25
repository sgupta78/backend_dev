const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://shivamgupta01407:ywDrJ09krfeNtStp@backenddev.d1s42kb.mongodb.net/DevTinder');
}

module.exports = connectDB;

