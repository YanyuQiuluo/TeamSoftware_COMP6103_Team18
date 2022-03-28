var express = require('express');
var router = express.Router();

var result=require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const conn = require("../mode_js/database");
router.route("/")
    .post(function (req,res){

        res.setHeader('Content-Type', 'application/json');
        try {
            let password=req.body.password;
            let username=req.body.userName;
            let conn=require('../mode_js/database');
            // let sql="SELECT * FROM user";
            let sql="select * from user where username=  '"+username+"';";
            console.log(sql);
            // let sql="select * from user where username == "+username;

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
        }
        catch (e){
            res.json(e);
        }




    });




module.exports = router;
