'use strict'

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

const publicFolder = path.resolve(__dirname, '..', 'public');
const imgFolder = path.resolve(__dirname, 'img');

app.use(morgan('dev'));
app.use(express.static(publicFolder));
app.use(express.static(imgFolder));
app.use(body.json());
app.use(cookie());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('${publicFolder}/index.html'));
})

// app.post('/login', (req, res) => {
//     res.cookie('', req.username, {expires: new Date(Date.now() + 1000 * 60 * 10)});
//     res.status(201).json({req});
// })

// app.delete('/logout', (req, res) => {
//     res.send('logout')
// })

// app.post('/signup', (req, res) => {
//     res.send('signup')
// })

// app.get('/session', (req, res) => {
//     res.send('session')
// })

// app.get('/getHomePage', (req, res) => {
//     res.send('getHomePage')
// })

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
