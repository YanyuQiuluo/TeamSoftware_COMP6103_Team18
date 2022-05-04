const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const sequelize = require("../mode_js/MySql");
const user_ = require("../Model/User");


router.route("/")
    .post( function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        func(req,res)
            .then(x=>{res.json(result.success(x));  })
            .catch(x=>{res.json(result.fail(x));})
    });


async  function func(req,res){
    return  await user_.findAll();
}


module.exports = router;