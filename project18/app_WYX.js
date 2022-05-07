var loginRouter_ = require('./routes/login_');
var countryDetail_=require('./routes/CountryDetail_');
var success=require('./routes/PayPalResultSuccess');
var cancel=require('./routes/PayPalResultCancel');
var pay_history=require('./routes/PayHistory');

var test=require('./routes/Test_FindUser');


function Load(app) {
    app.use('/login', loginRouter_);
    app.use("/country_detail",countryDetail_);
    app.use("/success",success);
    app.use("/cancel",cancel);
    app.use("/pay_history",pay_history);
    app.use("/pay_history_uuid",require("./routes/PayHistory_uuid"));
    app.use("/user_list",require("./routes/managerUserList"));
    app.use("/upgrade_user",require("./routes/managerUpgrateUser"));
    app.use("/relegation_user",require("./routes/managerRelegationUser"));

    app.use("/adminPage",require("./routes/adminPage"));
    app.use("/getFootPrint",require("./routes/getFootprint"));
}

module.exports=Load