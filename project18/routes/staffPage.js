var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();
const Contry = require("../Model/Contry");
const country_name = require("../Model/Contry_name");
const transaction = require("../Model/transaction");
//const {where} = require("sequelize/types");

router.get('/', function(req, res, next) {
    res.render('staffPage', { title: 'staffPage' });
});

module.exports = router;