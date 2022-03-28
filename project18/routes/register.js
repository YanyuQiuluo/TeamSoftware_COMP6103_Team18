var express = require('express');
const connection = require("../mode_js/database");
const result = require("../mode_js/result");
var router = express.Router();

router.route("/register")
    .post(function (req,res){

        let connection = require('../mode_js/database');

        let username=req.body.userName;
        let password=req.body.password;
        let email=req.body.email;


        let sql = "SELECT * FROM country";
        connection.query(sql,function (err,results){
            if(err) throw err;
            res.json(result.success( results));
        });

        if(!username || !password || !email){
            res.setHeader('Content-Type', 'application/json');
            res.json('error');
        }
        res.setHeader('Content-Type', 'application/json');
        res.json('Register success');

    });

router.route("/verify")
    .post(function (req,res){

        let username=req.body.userName;
        let password=req.body.password;
        let email=req.body.email;

    });


module.exports = router;