const indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
const registerRouter = require("./routes/registerPage");
const countrylistRouter = require("./routes/countrylistPage")
const contactRouter = require("./routes/contactPage")
const myaccountRouter = require("./routes/myaccountPage.js")

function Load(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/loginPage', require('./routes/loginPage'));
    app.use('/countrylistPage', countrylistRouter);
    app.use('/contactPage',contactRouter);
    app.use('/myaccountPage',myaccountRouter);
}

module.exports=Load