const express = require('express');
const app = express();
const path = require('path');
// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// dotenv
require('dotenv').config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
module.exports = app;
