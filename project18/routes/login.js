const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");

router.route("/")
    .post(function (req,res){

            res.setHeader('Content-Type', 'application/json');
            let username=req.body.userName;
            if(!username){res.json(result.fail("username empty")); return;}
            let password=req.body.password;
            if(!password){res.json(result.fail(" password empty"));return;}


            require("../mode_js/MongoDB")
                .table("user",closeDB={})
                .then(x=>{return x.findOne({"username":username})  })
                .then(x=>{
                        if(!x)throw "user no found";
                        if(x.password!=password)throw "password error";
                        let token = Tokens.onLogIn(x);
                        res.json(result.success(token));
                })
                //-----------------------------------------------------------------------------------------------------------------------------------------------
                .catch(x=>res.json(result.fail(x)))
                .finally(()=>{closeDB.invoke()})
    });

module.exports = router;
