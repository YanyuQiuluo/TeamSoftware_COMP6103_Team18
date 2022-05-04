var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();


router.route("/")
    .post(function (req,res){
        // function of a staff:
        //1. Edit country and browse transaction infomation:
        //2.


        //require feature index
        let userid = req.body.email;


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