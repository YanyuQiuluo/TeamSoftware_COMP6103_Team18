const indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
const registerRouter = require("./routes/registerPage");
const countrylistRouter = require("./routes/countrylistPage")

function Load(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/loginPage', require('./routes/loginPage'));
    app.use('/countrylistPage', countrylistRouter);

}
module.exports=Load