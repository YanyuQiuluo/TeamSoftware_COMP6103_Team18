const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const m = require("../Model/Contry");

router.route("/")
    .post( function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        func(req,res)
            .then(x=>{res.json(result.success(x));  })
            .catch(x=>{res.json(result.fail(x));})
    });

async  function func(req,res){
    let countryID=req.body.countryID;
    if(!countryID)throw "no id";
    let re= await m.findOne({where:{"id":countryID}})
    if(!re)throw "countryID no found";
    return re;
}

module.exports = router;