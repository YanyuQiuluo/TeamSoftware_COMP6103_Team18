const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const paypal = require("./PayPalCfg");

router.route("/")
    .post(function (req,res){
        res.end("payment cancel");
    });

module.exports=router;