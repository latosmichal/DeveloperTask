const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const utils = require('./util');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/myform', function (req, res) {
    let firstline = req.query.firstline;
    let secondline = req.query.secondline;
    let polynomial;
    try {
        polynomial = utils.calculatePolynomial(firstline,secondline);
        res.render('result', {polynomial: polynomial});
    }
    catch (e) {
        res.render('result', {polynomial: e.message})
    }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


