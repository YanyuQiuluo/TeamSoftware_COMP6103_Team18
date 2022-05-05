var express = require('express');
const result = require("../mode_js/result");
const transaction = require("../Model/transaction");
var router = express.Router();

/* GET home page. */

router.route("/").
    post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    //根据uuid返回记录
    const uuid = req.body.uuid;
    const transaction = require("../Model/transaction");
    return transaction.findAll({
        where: {
            uuid: req.body.uuid
        }
    });
}

module.exports = router;
