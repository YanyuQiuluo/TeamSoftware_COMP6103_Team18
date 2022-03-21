var express = require('express');
var router = express.Router();

router.route("/")
    .post(function (req,res){
            var sql = require("mssql");

            // config for your database
            var config = {
                    user: 'sa',
                    password: 'mypassword',
                    server: 'localhost',
                    database: 'SchoolDB'
            };

            // connect to your database
            sql.connect(config, function (err) {

                    if (err) console.log(err);

                    // create Request object
                    var request = new sql.Request();

                    // query to the database and get the records
                    request.query('select * from Student', function (err, recordset) {

                            if (err) console.log(err)

                            // send records as a response
                            res.send(recordset);

                    });


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