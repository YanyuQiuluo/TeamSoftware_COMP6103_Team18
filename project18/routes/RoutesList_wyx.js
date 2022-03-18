var express = require('express');
var router = express.Router();

router.route("/")
    .get(function (req,res){
        res.setHeader('Content-Type', 'application/json');
        res.json(['aaa','bbb','cccc']);
    });




module.exports = router;



