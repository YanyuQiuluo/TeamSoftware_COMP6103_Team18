var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/transaction");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let userid = req.body.userid;
    return await m.findAll({where: {"user_id": userid}});
}

module.exports = router;