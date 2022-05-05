var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/User_detail");
const  m2=require("../Model/transaction");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let username = req.body.username;
    if(!username)throw "username null";
    let re= await m.findOne({where:{"username":username}})
    if(!re)throw "userid no found";
    let re2=await  m2.findAll({where:{"user_name":username}})
    return [re,re2];
}

module.exports = router;