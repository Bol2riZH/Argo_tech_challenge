'use strict';

require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

const crewRoutes = require('./routes/crew');

app.use('/', crewRoutes);

module.exports = app;
