var express = require('express');
var router = express.Router();

router.route("/")
    .post(function (req,res){

        let username=req.body.userName;
        let password=req.body.password;
        let email=req.body.email;
        let telephone=req.body.telephone;
        let savings=req.body.savings;
        let address=req.body.address;

        if(!username || !password || !email || !telephone || !savings || !address){
            res.setHeader('Content-Type', 'application/json');
            res.json('error');
        }
        res.setHeader('Content-Type', 'application/json');
        res.json('Register success');

    });


module.exports = router;