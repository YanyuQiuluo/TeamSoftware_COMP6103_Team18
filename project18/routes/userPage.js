var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();


router.route("/")
    .post(function (req,res){


        //require feature index
        let userid = req.body.email;
        var feature="";


        require("../mode_js/MongoDB")
            .table("household",closeDB={})
            .then(x=>{
                return x.findOne({"household_id":userid});

            })
            .then(x=>{
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})
    });


module.exports = router;