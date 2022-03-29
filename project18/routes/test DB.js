const express = require('express');
const result = require("../mode_js/result");
const router = express.Router();

router.route("/")
    .post(function (req,res) {
        res.setHeader('Content-Type', 'application/json');
        let db={};
        require('../mode_js/MongoDB').table("user",db)
            .then(x=>x.find({}).toArray())

            //--------------------------------------------------------------------------------------------------------------------------------------------
            .then(x=>{ res.json(result.success(x)) })
            .catch(x=>res.json(result.fail( x)))
            .finally(()=>{if(db.db){console.log("here"); db.db.close();}})



    });

module.exports = router;