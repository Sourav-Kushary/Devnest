/**
 * *
 * validates email and pass
 */
const { emailValidate, passwordValidate} =require("../utils/emailPassValidate");
const registerInitialCheck = function(req, res, next){
    const {email, password, confirmPassword} = req.body;
    if(typeof email ==='string'&&
    typeof password ==='string' &&
    typeof confirmPassword === 'string'&&
    email.length>0 &&
    password.length>8 &&
    emailValidate(email) && 
    passwordValidate(password) && 
    password===confirmPassword){
        next;
    }else{
        res.status(401).send("Initial check Fails");
    }
}

module.exports = registerInitialCheck;