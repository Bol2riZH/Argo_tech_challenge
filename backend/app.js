'use strict';

require('./mongodb');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const crewRoutes = require('./routes/crew');

app.use('/', crewRoutes);

module.exports = app;
