const registerRouter = require("./routes/register");
const countrylistRouter = require("./routes/countrylist");
var connection = require('./routes/database');

function Load(app) {
    app.use('/register', registerRouter);
    app.use('/countrylist', countrylistRouter);
    app.use('/database', connection);

}
module.exports=Load