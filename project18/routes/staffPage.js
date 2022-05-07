var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const Contry = require("../Model/Contry");
const transaction = require("../Model/transaction");

router.get('/', function(req, res, next) {
    res.render('staffPage', { title: 'staffPage' });
});

router.route("/")
    .post(async function (req, res) {
        // function of a staff:
        //1. browsing countrylist.
        //2. browsing transactionlist.
        //3. browsing data calculated by upper two list.

        let get_country = req.body.get_country;
        let Countrylist = await Contry.findAll();
        //let transactionlist = await transaction.findAll();
        let returnlist;

        for (let i = 0; i  < Countrylist.length; i++){
            console.log(Countrylist[i]);
            res.json(Countrylist[i]);
            //let countryname = Countrylist[i].get(country_name);
            //console.log(countryname);

            }








        // require("../mode_js/MongoDB")
        //     .table("transaction",closeDB={})
        //     .then(x=>{
        //         transactionlist = x.findAll();
        //     })
        //     .then(x=>{
        //         res.json(result.success(x));
        //     })
        //     //-----------------------------------------------------------------------------------------------------------------------------------------------
        //     .catch(x=>res.json(result.fail(x)))
        //     .finally(()=>{closeDB.invoke()})
    });


module.exports = router;