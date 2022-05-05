const express = require('express');
var router = express.Router();
const paypal = require("paypal-rest-sdk");
const {DATETIME} = require("mysql/lib/protocol/constants/types");
const transaction = require("../Model/transaction");
const result = require("../mode_js/result");
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AZy5f1Hb6e31rRiN1Yl7C5Rl0O2aDZC7aK-QpEGEjDumOPORvwOPpwMC-6wewOBTGI_TxGvMrje-Zu2-',
    'client_secret': 'EFbe8sLzq2XgLlnhILj5FNIvsHlUAhVbCVbxHLCelZ6tobaW_rWpY7DYbAJWP2xFwqGC1JSPwD9LqwCD'
});
router.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));


//outer.listen(PORT, () => console.log(`Server Started on ${PORT}`));





router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success?uuid="+req.body.uuid+"&total="+req.body.transfer_amount_total,
            "cancel_url": "http://localhost:3000/cancel?uuid="+req.body.uuid+"&total="+req.body.transfer_amount_total
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Redhock Bar Soap",
                    "sku": "001",
                    "price": req.body.transfer_amount_total,//"25.00",
                    "currency": "GBP",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "GBP",
                "total": req.body.transfer_amount_total//"25.00"
            },
            "description": "Washing Bar soap"
        }]
    };

    // payment started
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            res.json(result.fail( error));

        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    let re=payment.links[i].href;
                    console.log(re);
                    res.json(result.success( re));
                }
            }
        }
    });

    // payment started record
    const transaction = require("../Model/transaction");
    for(var i=0; i<req.body.basket.length; i++){
        const payment = await transaction.create({

            dataTime: getCurrentTime(),
            transfer_amount: req.body.basket[i].transfer_amount,
            panel_amount: req.body.basket[i].panel_amount,
            country_name: req.body.basket[i].donate_country,
            user_name: req.body.username,
            status: "pending",
            uuid:req.body.uuid
        });
    }

    function getCurrentTime() {
        var date = new Date();//current time
        var month = zeroFill(date.getMonth() + 1);//month
        var day = zeroFill(date.getDate());//day
        var hour = zeroFill(date.getHours());//hour
        var minute = zeroFill(date.getMinutes());//minute
        var second = zeroFill(date.getSeconds());//second

        //current time
        var curTime = date.getFullYear() + "-" + month + "-" + day
            + " " + hour + ":" + minute + ":" + second;

        return curTime;
    }

    /**
     * fill zero
     */
    function zeroFill(i){
        if (i >= 0 && i <= 9) {
            return "0" + i;
        } else {
            return i;
        }
    }

});

module.exports = router;