
var loginRouter = require('./routes/login');
function Load(app) {
    app.use('/login', loginRouter);
  app.use('/List',require('./routes/RoutesList_wyx'));
}

module.exports=Load