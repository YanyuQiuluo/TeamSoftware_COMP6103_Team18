const express = require('express');
const router = express.Router();
const result = require("../mode_js/result");
const Tokens = require("../mode_js/Tokens");
const paypal = require("./PayPalCfg");
router.route("/")
    .get(function (req,res){

        const payerId = req.body.PayerID;
        const paymentId = req.body.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                }
            }]
        };

// Obtains the transaction details from paypal
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            //When error occurs when due to non-existent transaction, throw an error else log the transaction details in the console then send a Success string reposponse to the user.
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.send('Success');
            }
        });

    });

module.exports=router;


