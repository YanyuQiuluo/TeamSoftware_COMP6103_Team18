var express = require('express');
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
var router = express.Router();


router.route("/")
    .post(function (req,res){

        //require feature index
        let featureIndex = req.body.feature_index;
        if(featureIndex==0){
            let feature = "gdp";
        }else if(featureIndex==1){
            let feature = "carbon_emission";
        }else if(featureIndex==2){
            let feature = "price_of_solar_panel";
        }else if(featureIndex==3){
            let feature = "savings";
        }

        //require ranking index, -1:decreasing, 0:default without ranking, 1:increasing
        //For rankingTypeIndex, x.fing.sort(-1) means decreasing, x.fing.sort(1) means increasing
        //if rankingTypeIndex = o, output will be default list.
        let rankingTypeIndex = req.body.ranking_index;

        require("../mode_js/MongoDB")
            .table("country",closeDB={})
            .then(x=>{
                if(!rankingTypeIndex==0){
                    return x.find({},{_id:0}).sort({feature:rankingTypeIndex}).toArray()
                }else{
                    return x.find({},{_id:0});
                }

            })
            .then(x=>{
                res.json(result.success(x));
            })
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail(x)))
            .finally(()=>{closeDB.invoke()})





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