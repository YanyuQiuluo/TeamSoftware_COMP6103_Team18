var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/User_detail");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let userid = req.body.userid;
    if(!userid)throw "userid null";
    let to= await m.findOne({where: {"user_id": userid}});
    if(!to)throw "user no found";
    if(to.user_type!="staff")return  to;
    to.user_type="household";
   return  await to.save();
}

module.exports = router;