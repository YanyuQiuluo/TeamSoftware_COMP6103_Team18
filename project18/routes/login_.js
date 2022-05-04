const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const user_ = require("../Model/User");

router.route("/")
    .post( function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        func(req,res)
            .then(x=>{res.json(result.success(x));  })
            .catch(x=>{res.json(result.fail(x));})
    });


async  function func(req,res){
    let username=req.body.userName;
    if(!username)throw "username empty";
    let password=req.body.password;
    if(!password)throw " password empty";
    let re= await user_.findOne({where:{"username":username}})
    if(!re)throw "user no found";
    if(re.password!==password)throw "password error";
    return Tokens.onLogIn(re);
}



module.exports = router;
