const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const m = require("../Model/Contry");
const Contry = require("../Model/Contry");

router.route("/")
    .post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){
    let featureIndex = req.body.feature_index;
    // console.log(featureIndex);
    let rankingTypeIndex = req.body.ranking_index;
    // console.log(rankingTypeIndex);
    let re= await m.findAll();
    if(rankingTypeIndex===0)return  re;
    re.sort((a,b)=>{
        let re=0.0;
        if(featureIndex==0)re= a.gdp-b.gdp;
        else if(featureIndex==1)re= a.carbon_emissions-b.carbon_emissions;
        else  if(featureIndex==2)re=  a.price_of_solar_panel-b.price_of_solar_panel;
        else if(featureIndex==3)re= a.savings-b.savings;
        return re*rankingTypeIndex;


    });
    console.log(re)

    return  re;
}
module.exports = router;