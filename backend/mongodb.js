'use strict';
const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://Matthieu:DSqvdX4fJw7D7cdQ@argonautes.sfdnyhk.mongodb.net/Crew
`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('MongoDB connected');
    else console.error('connection error: ' + err);
  }
);
