var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();

let dic={};


router.route("/register1")
    .post(function (req,res){
        res.setHeader('Content-Type', 'application/json');

        // declare database and auto_mailer.
        let connection = require('../mode_js/database');
        const automailer = require("../mode_js/automailer");
        let email=req.body.email;

        // endure email not null, and not registered before.
        if(!email){
            res.json('null value');
            return;
        }
        let sql = "SELECT * FROM user WHERE email = '"+email+"';";
        connection.query(sql,function (err,results){
            if(err) throw err;
            console.log(results);
            if(results.length>0){
                res.json('email existed');
                return;
            }
            else {
                //verify_code = automailer.verify();
                let verify_code = automailer(email);
                dic[email] = verify_code;

                // respond sent message.
                res.json('code sent');
            }
        });


    });

router.route("/verify")
    .post(function (req,res){

        // get all the data.
        let username=req.body.username;
        let password=req.body.password;
        let verify_return=req.body.verify_return;
        let email=req.body.email;

        // ensure verify code is right.
        console.log(verify_return);
        console.log(dic[email]);
        if (verify_return == dic[email]){
            let connection = require('../mode_js/database');

            //let sql = "INSERT INTO user SET";
            //let post = {username:username, password:password, userType:'household', email:email};
            let sql = "INSERT INTO user(username, password, userType, email) VALUES('"+username+"', '"+password+"', 'household', '"+email+"')";
            connection.query(sql,function (err,results){
                if(err) throw err;
                res.json(result.success(results));
            });
            return;
        }

        // return json if verify code is wrong.
        res.setHeader('Content-Type', 'application/json');
        res.json('wrong code');
    });


module.exports = router;