var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();


router.route("/")
    .post(function (req,res){
        // function of a staff:
        //1. browsing countrylist.
        //2. browsing transactionlist.
        //3. browsing data calculated by upper two list.

        //require feature index
        let userid = req.body.email;
        let transactionlist;

        require("../mode_js/MongoDB")
            .table("transaction",closeDB={})
            .then(x=>{
                transactionlist = x.findAll();
            })
            .then(x=>{
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})
    });


module.exports = router;