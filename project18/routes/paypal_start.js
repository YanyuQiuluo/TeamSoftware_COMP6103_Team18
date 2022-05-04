const express = require('express');
var router = express.Router();
const paypal = require("paypal-rest-sdk");
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AZy5f1Hb6e31rRiN1Yl7C5Rl0O2aDZC7aK-QpEGEjDumOPORvwOPpwMC-6wewOBTGI_TxGvMrje-Zu2-',
    'client_secret': 'EFbe8sLzq2XgLlnhILj5FNIvsHlUAhVbCVbxHLCelZ6tobaW_rWpY7DYbAJWP2xFwqGC1JSPwD9LqwCD'
});
router.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));


//outer.listen(PORT, () => console.log(`Server Started on ${PORT}`));

router.post('/test',(req,res)  => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "SolarOffset Donation",
                    "sku": "001",
                    "price": "\""+req.body.transfer_amount+"\"",
                    "currency": "GBP",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "GBP",
                "total": "\""+req.body.transfer_amount+"\""
            },
            "description": "SolarOffset Donation"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.json(payment.links[i].href.url);
                }
            }
        }
    });
})









router.post('/', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Redhock Bar Soap",
                    "sku": "001",
                    "price": req.body.price,//"25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": req.body.price//"25.00"
            },
            "description": "Washing Bar soap"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });

});

module.exports = router;