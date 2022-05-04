
var loginRouter = require('./routes/login');
var loginRouter_ = require('./routes/login_');

var countryDetail=require('./routes/CountryDetail');
var countryDetail_=require('./routes/CountryDetail_');

var success=require('./routes/PayPalResultSuccess');
var cancel=require('./routes/PayPalResultCancel');

var pay_history=require('./routes/PayHistory');

var test=require('./routes/Test_FindUser');
const countrylistRouter_ = require("./routes/countrylist_");
const userPageRouter_ = require("./routes/userPage_");

function Load(app) {
    app.use('/login', loginRouter);
    app.use('/login_', loginRouter_);

    app.use("/country_detail",countryDetail);
    app.use("/country_detail_",countryDetail_);

    app.use('/countrylist_', countrylistRouter_);

    app.use("/success",success);
    app.use("/cancel",cancel);

    app.use("/pay_history",pay_history);

    app.use("/test",test);
    app.use('/userPage_', userPageRouter_);
}

module.exports=Load