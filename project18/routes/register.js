var express = require('express');
var router = express.Router();

router.route("/")
    .post(function (req,res){

        let username=req.body.userName;
        let password=req.body.password;
        let email=req.body.email;

        if(!username || !password || !email){
            res.setHeader('Content-Type', 'application/json');
            res.json('error');
        }
        res.setHeader('Content-Type', 'application/json');
        res.json('Register success');

    });


module.exports = router;