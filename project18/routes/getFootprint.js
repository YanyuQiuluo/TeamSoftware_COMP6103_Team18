var express = require('express');
var router = express.Router();
const result = require("../mode_js/result");
const user=require("../Model/User_detail");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let l= req.body.electricity_consumption;
    if(!l)throw "electricity_consumption null"
    let user_id=req.body.user_id;
    if(!user_id)throw "user_id null"
    re=l*0.31;

    try {
       let u= await user.findOne({where:{"user_id":user_id}})
        if(u){
            u.electicity_usage_pm=l;
            u.feul_usage_pm=re;
            u.save();
        }
    }catch (e) {

    }
    return re;
}

module.exports = router;
