const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const paypal = require("./PayPalCfg");
router.route("/")
    .get(function (req,res){

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const uuid = req.query.uuid;
        const total = req.query.total;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "GBP",
                    "total": total
                }
            }]
        };

// Obtains the transaction details from paypal
        paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
            //When error occurs when due to non-existent transaction, throw an error else log the transaction details in the console then send a Success string reposponse to the user.
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.send('Success');

                const transaction = require("../Model/transaction");
                await transaction.update({ status: "success" }, {
                    where: {
                        uuid: uuid
                    }
                });
            }
        });

    });

module.exports=router;


