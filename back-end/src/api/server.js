const port = process.env.PORT || 3001;
const app = require('./app');
const { errorHandler } = require('../middlewares');
const { loginRouter } = require('./routes');

app.use('/login', loginRouter);
// app.use('/register', registerRouter);
// app.use('/customer', customerRouter)
// app.use('/seller', sellerRouter);
// app.use('/admin', adminRouter);
app.use(errorHandler);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
