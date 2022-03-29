
var loginRouter = require('./routes/login');
var TestDB = require('./routes/test DB');
function Load(app) {
    app.use('/login', loginRouter);
    app.use('/test',TestDB);
}

module.exports=Load