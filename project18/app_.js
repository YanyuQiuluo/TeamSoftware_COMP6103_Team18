const indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
function Load(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/login', require('./routes/loginPage'));
}
module.exports=Load