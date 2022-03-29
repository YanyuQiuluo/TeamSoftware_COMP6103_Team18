const express = require('express');
const result = require("../mode_js/result");
const router = express.Router();

router.route("/")
    .post(function (req,res) {
        res.setHeader('Content-Type', 'application/json');
        let db;
        require('../mode_js/MongoDB')()
            .then(x=>{ db=x; return  x.db()})
            //--------------------------------------------------------------------------------------------------------------------------------------------
            .then(x=>x.collection("user"))
            .then(x=>x.find({}).toArray())
            .then(x=>{ res.json(result.success(x)) })
            //--------------------------------------------------------------------------------------------------------------------------------------------
            .catch(x=>res.json(result.fail( x)))
            .finally(()=>{if(db) db.close();})

    });

module.exports = router;