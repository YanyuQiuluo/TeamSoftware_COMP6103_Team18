var express = require('express');
var router = express.Router();


router.route("/")
    .post(function (req,res){
            let connection = require('../mode_js/database');

            let sql = "SELECT * FROM country";
            connection.query(sql,function (err,results){
            if(err) throw err;
            res.json(results);
            });





        /*let country_id=req.body.country_id;
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
                'price_of_solar_panel':price_of_solar_panel,'savings':savings});*/

    });


module.exports = router;