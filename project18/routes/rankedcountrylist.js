
var express = require('express');
//const connection = require("../mode_js/database");
var router = express.Router();


router.route("/")
    .post(function (req,res){

        let connection = require('../mode_js/database');

        //featureIndex will be sent by the user to choose upon which feature the ranking will take place
        let featureIndex = 2;
        let feature = "gdp";
        if(featureIndex==0){
            feature = "gdp";
        }else if(featureIndex==1){
            feature = "carbon_emission";
        }else if(featureIndex==2){
            feature = "price_of_solar_panel";
        }

        //rankingTypeIndex will be sent by the user to choose the way of ranking (decreasing or increasing)
        let rankingTypeIndex = 0;
        let rankingType = "desc";
        if(rankingTypeIndex==0){
            rankingType = "desc";
        }else{ //the default in sql in increasing
            rankingType = "";
        }

        if(feature.length>0) {
            //let sql;
            let sql = "SELECT * FROM country ORDER BY ";
            let sql2l = sql.concat(feature," ",rankingType);
            // req.respond(sql2l);
            connection.query(sql2l, function (err, results) {
                if (err) throw err;
                res.json(results);
            });
        }


    });


module.exports = router;