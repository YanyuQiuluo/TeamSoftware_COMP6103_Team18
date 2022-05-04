var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();


router.route("/")
    .post(function (req,res){

        let userid = req.body.userid;

        require("../mode_js/MongoDB")
            .table("transaction",closeDB={})
            .then(x=>{
                return x.find({"user_id":userid});
            })
            .then(x=>{
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})
    });


module.exports = router;