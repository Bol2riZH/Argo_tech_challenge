'use strict';

const express = require('express');
const router = express.Router();

const crewCtrl = require('../controllers/crew');

router.get('/', crewCtrl.getAll);
router.post('/', crewCtrl.addCrewMember);
router.delete('/', crewCtrl.removeCrewMember);

module.exports = router;
