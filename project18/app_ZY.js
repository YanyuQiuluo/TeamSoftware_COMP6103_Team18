const registerRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");

function Load(app) {
    app.use('/register', registerRouter);
    app.use('/countrylist', countrylistRouter);

}
module.exports=Load