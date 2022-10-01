'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
// const uuid = require('uuid').v4;
// const path = require('path');
const app = express();
app.use(morgan('dev'));
app.use(body.json());
app.use(cookie());

const port = process.env.PORT || 3000;

const fsPromises = require('fs').promises

app.get('/', (req, res) => {
    res.send('index')
})

app.post('/login', (req, res) => {
    res.cookie('', req.username, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.status(201).json({req});
})

app.delete('/logout', (req, res) => {
    res.send('logout')
})

app.post('/signup', (req, res) => {
    res.send('signup')
})

app.get('/session', (req, res) => {
    res.send('session')
})

app.get('/getHomePage', (req, res) => {
    res.send('getHomePage')
})

// app.all('[^]*', (req, res) => {
//     res.status(404).send('Not found. Undefined request path');
// });

app.listen(port, () => {
    console.log(`Server listening port ${port}`);
});