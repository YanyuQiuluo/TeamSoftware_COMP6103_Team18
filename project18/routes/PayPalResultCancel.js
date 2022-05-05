const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const paypal = require("./PayPalCfg");
const transaction = require("../Model/transaction");

router.route("/")
    .get(async function (req, res) {
        res.end("payment cancel");

        const uuid = req.query.uuid;
        const transaction = require("../Model/transaction");
        await transaction.update({status: "cancel"}, {
            where: {
                uuid: uuid
            }
        });
    });

module.exports=router;