const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AZy5f1Hb6e31rRiN1Yl7C5Rl0O2aDZC7aK-QpEGEjDumOPORvwOPpwMC-6wewOBTGI_TxGvMrje-Zu2-',
    'client_secret': 'EFbe8sLzq2XgLlnhILj5FNIvsHlUAhVbCVbxHLCelZ6tobaW_rWpY7DYbAJWP2xFwqGC1JSPwD9LqwCD'
});
module.exports=paypal;