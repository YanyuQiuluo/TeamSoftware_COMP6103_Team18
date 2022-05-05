const registerRouter = require("./routes/register_");
const paypalRouter = require("./routes/paypal_start");
const countrylistRouter_ = require("./routes/countrylist_");
const userPageRouter_ = require("./routes/userPage_");
const paymentResultRouter = require("./routes/paymentResult");
const staffPageRouter = require("./routes/staffPage");

function Load(app) {
    app.use('/register', registerRouter);
    app.use('/paypal_start', paypalRouter);
    app.use('/countrylist', countrylistRouter_);
    app.use('/userPage', userPageRouter_);
    app.use('/paymentResult', paymentResultRouter);
    app.use('/staffPage', staffPageRouter);

}
module.exports=Load