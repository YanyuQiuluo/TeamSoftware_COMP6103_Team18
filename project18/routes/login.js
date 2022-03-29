var express = require('express');
var router = express.Router();

var result=require("../mode_js/result");
var Tokens = require("../mode_js/Tokens");
var conn=require('../mode_js/database');



router.route("/")
    .post(function (req,res){

        res.setHeader('Content-Type', 'application/json');

        let username=req.body.userName;
        if(!username){
            res.json(result.fail(" account empty"));
        }

        let password=req.body.password;
        if(!password){
            res.json(result.fail("password empty"));
        }

        let sql="select * from user where username=  '"+username+"';";
        console.log("login  "+sql);
        // let sql="select * from user where username == "+username;
        conn.query("")
            .then()
        conn.query(sql,
            function (err,re){
                if(err)res.json(err);
                if(Array.isArray( re)==false||re.length==0){
                    res.json( result.fail("account no found"));
                    return;
                }
                if(re[0].password!=password){
                    res.json( result.fail("password error"));
                    return;
                }
                token =Tokens.onLogIn(re[0]);
                res.json(result.success(token));
            });
    });




module.exports = router;
