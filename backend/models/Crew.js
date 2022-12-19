'use stricte';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const crewSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

crewSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Crew', crewSchema);
