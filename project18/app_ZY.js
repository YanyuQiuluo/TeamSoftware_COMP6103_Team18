const registerRouter = require("./routes/register");
const verifyRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");
const userPageRouter = require("./routes/userPage");
// const rankedcountrylistRouter = require("./routes/rankedcountrylist");
// const automailer = require("./mode_js/automailer");


function Load(app) {
    app.use('/register', registerRouter);
    app.use('/register', verifyRouter);
    app.use('/countrylist', countrylistRouter);
    app.use('/userPage', userPageRouter);
}
module.exports=Load