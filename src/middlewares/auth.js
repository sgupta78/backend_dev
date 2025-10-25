const adminAuth = (req,res,next)=>{
    const token = "abc";
    const isAdminAuthorised = token === "abc";
    console.log("checking the admin authorization.");
    if (!isAdminAuthorised){
        res.status(401).send("unthorized access")
    }else{
        next();
    }
}


const userAuth =(req,res,next )=>{
    const user = "shiv";
    const isUserAuthorized = user === "shiv";
    console.log("checking the user authorization");
    if (!isUserAuthorized){
        res.status(401).send("unthorized user");
    
    } else {
        next();
    }
}

module.exports ={
    adminAuth,
    userAuth
}