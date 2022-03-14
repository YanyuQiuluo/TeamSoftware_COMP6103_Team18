var express = require('express');
var router = express.Router();

router.route("/")
    .post(function (req,res){
        let password=req.body.password;
        let username=req.body.userName;

        res.setHeader('Content-Type', 'application/json');

        if(password!='123'||username!='123'){
            res.json('error');
        }
        res.json('login success');
    });




module.exports = router;
