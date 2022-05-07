var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const Contry = require("../Model/Contry");
const country_name = require("../Model/Contry_name");
const transaction = require("../Model/transaction");
//const {where} = require("sequelize/types");
router.route("/")
    .post( async function func(req, res) {


        // function of a staff:
        //1. browsing countrylist.
        //2. browsing transactionlist.
        //3. browsing data calculated by upper two list.

        let Countrylist = await Contry.findAll();
        let returnlist_country_name = [];
        let returnlist_trans_amount = [];
        let returnlist_panel_amount = [];
        let returnlist_carbon_emission = [];

        for (let i = 0; i < Countrylist.length; i++) {

            let country_id = Countrylist[i].get('country_id');
            console.log(country_id);
            //算出一个国家的所有值的和
            //

            returnlist_country_name[i] = (await Contry.findOne({
                attributes: ['country_name'],
                where: {
                    country_id: country_id
                }
            }))['country_name'];

            returnlist_trans_amount[i] = await transaction.sum(
                'transfer_amount',
                {
                    where:
                        {
                            "country_id": country_id
                        }
                });

            returnlist_panel_amount[i] = await transaction.sum(
                'panel_amount',
                {
                    where:
                        {
                            "country_id": country_id
                        }
                });

            if(returnlist_panel_amount[i]!=null){
                returnlist_carbon_emission[i] = ((await Contry.findOne({
                    attributes: ['carbon_saving_factor'],
                    where: {
                        country_id: country_id
                    }
                }))['carbon_saving_factor'] * returnlist_panel_amount[i]).toFixed(2);
            }else{
                returnlist_carbon_emission[i] = null;
            }

        }

        let returnlist = [];
        returnlist[0] = returnlist_country_name;
        returnlist[1] = returnlist_trans_amount;
        returnlist[2] = returnlist_panel_amount;
        returnlist[3] = returnlist_carbon_emission;

        res.json(result.success(returnlist));
    });


module.exports = router;