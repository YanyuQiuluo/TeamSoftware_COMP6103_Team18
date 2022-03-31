var express = require('express');
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const automailer = require("../mode_js/automailer");
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



        require("./mode_js/MongoDB")
            .table("user",closeDB={})
            .then(x=>{return x.findOne({"email":email})})
            .then(x=>{
                if(x.length>0){
                    res.json(result.success(token));
                } else {
                    //verify_code = automailer.verify();
                    let verify_code = automailer(email);
                    dic[email] = verify_code;

                    // respond sent message.
                    res.json('code sent');
                }
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})








        /*let sql = "SELECT * FROM user WHERE email = '"+email+"';";
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
        });*/


    });

router.route("/verify")
    .post(function (req,res){

        // get all the data.
        let username=req.body.username;
        let password=req.body.password;
        let verify_return=req.body.verify_return;
        let email=req.body.email;

        // ensure verify code is right.
        //console.log(verify_return);
        //console.log(dic[email]);
        if (verify_return == dic[email]){
            //let connection = require('../mode_js/database');

            //let sql = "INSERT INTO user SET";
            //let post = {username:username, password:password, userType:'household', email:email};
            /*let sql = "INSERT INTO user(username, password, userType, email) VALUES('"+username+"', '"+password+"', 'household', '"+email+"')";
            connection.query(sql,function (err,results){
                if(err) throw err;
                res.json(result.success(results));
            });
            return;*/
            let new_user = {username:username,password:password,userType:'household',email:email};

            require("./mode_js/MongoDB")
                .table("user",closeDB={})
                .then(x=>{return x.insertOne(new_user)})
                .then(x=>{
                    res.json(result.success(x));
                })
                //-----------------------------------------------------------------------------------------------------------------------------------------------
                .catch(x=>res.json(result.fail( x)))
                .finally(()=>{closeDB.invoke()})



            /*dbo.collection("user").insertOne(new_user, function (err, res) {
                if (err) throw err;
                console.log("insert success");
                console.log(report);
                console.log(dbo);
                db.close();
            });*/
        }

        // return json if verify code is wrong.
        res.setHeader('Content-Type', 'application/json');
        res.json('wrong code');
    });


module.exports = router;