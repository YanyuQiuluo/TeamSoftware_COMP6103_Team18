var express = require('express');
var router = express.Router();
var connection = require('database');
const mysql = require("mysql");

router.route("/")
    .post(function (req,res){
            const mysql = require('mysql');

        // First you need to create a connection to the database
        // Be sure to replace 'user' and 'password' with the correct values
            const connection = mysql.createConnection({
                    host: 'localhost',
                    database: 'new_schema',
                    user: 'root',
                    password: '234567891'

            });

            let sql = "SELECT * FROM country";
            connection.query(sql,function (err,results){
            if(err) throw err;
            res.json(results);
            });
            return;



                let country_id=req.body.country_id;
                let country_name=req.body.country_name;
                let gdp=req.body.gdp;
                let carbon_emission=req.body.carbon_emission;
                let price_of_solar_panel=req.body.price_of_solar_panel;
                let savings=req.body.savings;

                res.setHeader('Content-Type', 'application/json');

                if(!country_id || !country_name || !gdp || !carbon_emission || !price_of_solar_panel
                    || !savings){
                        res.json('upload failed');
                }
                res.setHeader('Content-Type', 'application/json');
                res.json({'country_id':country_id, 'country_name':country_name,
                        'gdp':gdp, 'carbon_emission':carbon_emission,
                        'price_of_solar_panel':price_of_solar_panel,'savings':savings});

    });


module.exports = router;