const registerRouter = require("./routes/register_");
const paypalRouter = require("./routes/paypal_start");
const countrylistRouter_ = require("./routes/countrylist_");
const userPageRouter_ = require("./routes/userPage_");

function Load(app) {
    app.use('/register', registerRouter);
    app.use('/paypal_start', paypalRouter);
    app.use('/countrylist', countrylistRouter_);
    app.use('/userPage', userPageRouter_);

}
module.exports=Load