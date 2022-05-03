
var loginRouter = require('./routes/login');
var countryDetail=require('./routes/CountryDetail');
var success=require('./routes/PayPalResultSuccess');
var cancel=require('./routes/PayPalResultCancel');
function Load(app) {
    app.use('/login', loginRouter);
    app.use("/country_detail",countryDetail);
    app.use("/success",success);
    app.use("/cancel",cancel);
}

module.exports=Load