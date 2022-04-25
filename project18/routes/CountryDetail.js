const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");




router.route("/")
    .post(function (req,res){
        let countryID=req.body.countryID;
        if(!countryID){res.json(result.fail("ContryID empty")); return;}
        let qu= require("../mode_js/MongoDB")
            .table("country",closeDB={})
            .then(x=>{
                return x.findOne({"country_id":countryID})
            })
            .then(x=>{
                if(!x)throw "country no found"
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})
    });


module.exports = router;