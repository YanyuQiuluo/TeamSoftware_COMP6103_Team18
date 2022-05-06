var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/transaction");
const c=require("../Model/Contry_name");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let uuid = req.body.uuid;
    let re=await m.findAll({where: {"uuid": uuid}});
    for (const reKey in re) {
        var item=re[reKey];
       let  cc=await c.findOne({where:{"country_id":item.country_id}})
        item.setDataValue("country_name",cc.country_name)
        re[reKey]=item;
    }

    return re;
}

module.exports = router;