var express = require('express');
<<<<<<< Updated upstream
const result = require("../mode_js/result");
=======
const connection = require("../database");
>>>>>>> Stashed changes
var router = express.Router();


router.route("/")
    .post(function (req,res){
            let connection = require('../mode_js/database');

            let sql = "SELECT * FROM country";
            connection.query(sql,function (err,results){
            if(err) throw err;
            res.json(result.success( results));
            });





<<<<<<< Updated upstream
        /*let country_id=req.body.country_id;
        let country_name=req.body.country_name;
        let gdp=req.body.gdp;
        let carbon_emission=req.body.carbon_emission;
        let price_of_solar_panel=req.body.price_of_solar_panel;
        let savings=req.body.savings;
=======




                let country_id=req.body.country_id;
                let country_name=req.body.country_name;
                let gdp=req.body.gdp;
                let carbon_emission=req.body.carbon_emission;
                let price_of_solar_panel=req.body.price_of_solar_panel;
                let savings=req.body.savings;
>>>>>>> Stashed changes

        res.setHeader('Content-Type', 'application/json');

<<<<<<< Updated upstream
        if(!country_id || !country_name || !gdp || !carbon_emission || !price_of_solar_panel
            || !savings){
                res.json('upload failed');
        }
        res.setHeader('Content-Type', 'application/json');
        res.json({'country_id':country_id, 'country_name':country_name,
                'gdp':gdp, 'carbon_emission':carbon_emission,
                'price_of_solar_panel':price_of_solar_panel,'savings':savings});*/
=======
                if(!country_id || !country_name || !gdp || !carbon_emission || !price_of_solar_panel
                    || !savings){
                        res.json('upload failed!');
                }
                res.setHeader('Content-Type', 'application/json');
                res.json({'country_id':country_id, 'country_name':country_name,
                        'gdp':gdp, 'carbon_emission':carbon_emission,
                        'price_of_solar_panel':price_of_solar_panel,'savings':savings});
>>>>>>> Stashed changes

    });


module.exports = router;