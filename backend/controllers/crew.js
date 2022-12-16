'use strict';

const Crew = require('../models/Crew');

// show all crew members
exports.getAll = async (req, res) => {
  try {
    const crewsMembers = await Crew.find();
    if (!crewsMembers)
      return res.status(404).json({ message: 'No crew member found' });
    return res.status(200).json({ message: 'Crew: ', crewsMembers });
  } catch (e) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

// add a new crew member
exports.addCrewMember = async (req, res) => {
  try {
    const crewMember = new Crew({
      ...req.body,
    });
    await crewMember.save();
    return res
      .status(200)
      .json({ status: 'success', message: 'Crew member added!', crewMember });
  } catch (e) {
    return res.status(400).json({ message: 'This Crew member already in !' });
  }
};
