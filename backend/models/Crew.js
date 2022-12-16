'use stricte';

const mongoose = require('mongoose');

const crewSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Crew', crewSchema);
