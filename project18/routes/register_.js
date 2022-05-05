const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const user_ = require("../Model/User");

router.route("/register1")
    .post( function (req, res) {result.Run(req,res,func);});


let dic={};
async  function func(req,res){
    const automailer = require("../mode_js/automailer");
    let email=req.body.email;

    // endure email not null, and not registered before.
    if(!email) throw 'email null'
    let re= await user_.findOne({where:{"email":email}})
    if(re)throw "email exist";
    dic[email] = automailer(email);
    console.log(dic);
    return "code sent";
}



router.route("/verify")
    .post( function (req, res) {result.Run(req,res,func2);});

async  function func2(req,res){
    let username=req.body.username;
    let password=req.body.password;
    let verify_return=req.body.verify_return;
    let email=req.body.email;

    let re= await user_.findOne({where:{"email":email}})
    if(re)throw "email exist";

    if (verify_return != dic[email])    throw "verify error";

    let re2= await user_.findOne({where:{"username":username}})
    if(re2)throw "username exist";


    let new_user = user_.build(
        {
            username:username,
            password:password,
            user_type:'household',
            email:email})
    await new_user.save();
    return new_user;
}



module.exports = router;