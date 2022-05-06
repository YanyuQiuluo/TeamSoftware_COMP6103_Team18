const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const m = require("../Model/Contry");

router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let id=req.body.id;
    if(!id)throw "no id";
    let re= await m.findOne({where:{"country_id":id}})
    if(!re)throw "country name no found";
    return re;
}

module.exports = router;