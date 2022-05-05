var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const m = require("../Model/User_detail");
router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    return await m.findAll();
}

module.exports = router;