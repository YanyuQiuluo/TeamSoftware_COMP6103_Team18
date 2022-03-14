var express = require('express');
var router = express.Router();

router.route("/login")
    .post(function (req,res){
        let password=req.body.password;
        let username=req.body.userName;

        if(password!='123'||username!='123'){
            res.setHeader('Content-Type', 'application/json');
            res.json('error');
        }
        res.setHeader('Content-Type', 'application/json');
        res.json('login success');
    });

router.route("/register")
    .post(function (req,res){
        let password=req.body.password;
        let username=req.body.userName;


    });


module.exports = router;
