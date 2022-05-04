var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/User_detail");

router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let userid = req.body.email;
    if(!userid)throw "userid null";
    let re= await m.findAll({where:{"id":userid}})
    if(!re)throw "userid no found";
    return re;
}

module.exports = router;