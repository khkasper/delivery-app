const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { errorHandler, userAuthHandler } = require('../middlewares');
const {
  loginRouter,
  registerRouter,
  customerRouter,
  sellerRouter,
  adminRouter,
} = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use(userAuthHandler);
app.use('/customer', customerRouter);
app.use('/seller', sellerRouter);
app.use('/admin', adminRouter);
app.use(errorHandler);

module.exports = app;
