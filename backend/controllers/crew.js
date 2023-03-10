'use strict';

const Crew = require('../models/Crew');

// show all crew members
exports.getAll = async (req, res) => {
  try {
    const crewsMembers = await Crew.find();
    if (!crewsMembers)
      return res.status(404).json({ message: 'No crew member found' });
    return res.status(200).json({ message: 'Crew: ', crewsMembers });
  } catch (err) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

// create a crew member
exports.addCrewMember = async (req, res) => {
  try {
    const crewMember = new Crew({
      ...req.body,
    });
    await crewMember.save();
    return res
      .status(200)
      .json({ status: 'success', message: 'Crew member added!', crewMember });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

// remove all crews member
exports.removeCrewMember = async (req, res) => {
  try {
    await Crew.deleteMany({});
    return res
      .status(200)
      .json({ status: 'success', message: 'All crew members are gone' });
  } catch (err) {
    return res.status(400).json({ err });
  }
};
