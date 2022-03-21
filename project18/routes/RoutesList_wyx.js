var express = require('express');
var router = express.Router();

router.route("/")
    .get(function (req,res){
        // console.log(req.headers);
        console.log(req.headers['111']);
        res.setHeader('Content-Type', 'application/json');
        res.json(['aaa','bbb','cccc']);
    });




module.exports = router;



