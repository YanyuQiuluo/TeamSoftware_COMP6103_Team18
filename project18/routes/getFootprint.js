var express = require('express');
var router = express.Router();
const result = require("../mode_js/result");

router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let l= req.body.electricity_consumption;
    if(!l)throw "electricity_consumption null"
    let id=req.body.user_id;
    if(!id)throw "user_id null"
    re=l*0.31;
    return re;
}

module.exports = router;
