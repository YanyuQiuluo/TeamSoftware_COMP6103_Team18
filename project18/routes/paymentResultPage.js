var express = require('express');
const result = require("../mode_js/result");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('paymentResult', { title: 'paymentResult' });
});

router.route("/").
    post( function (req, res) {result.Run(req,res,func);});

async  function func(req,res){


}

module.exports = router;
