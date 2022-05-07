var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/User_detail");
const  m2=require("../Model/transaction");
const c=require("../Model/Contry_name");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let user_id = req.body.user_id;
    if(!user_id)throw "uset_id null";
    let re= await m.findOne({where:{"user_id":user_id}})
    if(!re)throw "userid no found";

    let re2=await  m2.findAll({
        where:{"user_id":user_id},
        include:[
            {
                attributes: ['country_name'],
                model: c,
            }
        ]
    })
    return [re,re2];
}

module.exports = router;