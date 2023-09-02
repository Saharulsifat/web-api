//application configration
const express = require('express');
const app = new express();
const router = require('./src/routers/api')
app.use('/api',router);
module.exports =app;
