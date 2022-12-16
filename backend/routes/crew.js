'use strict';

const express = require('express');
const router = express.Router();

const crewCtrl = require('../controllers/crew');

router.get('/', crewCtrl.getAll);
router.get('/', crewCtrl.addCrewMember);

module.exports = router;
