var express = require('express');
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
var router = express.Router();


router.route("/")
    .post(function (req,res){


        let qu= require("../mode_js/MongoDB")
            .table("country",closeDB={})
            .then(x=>{
                if(!ranking_index==0){
                    return x.find({},{_id:0}).sort({feature:rankingTypeIndex}).toArray()
                }else{
                    return x.find({},{_id:0});
                }

            })
            .then(x=>{
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})

    });


module.exports = router;