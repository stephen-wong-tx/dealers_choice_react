const router = require('express').Router();
const { Mountain, Range } = require('../db');

router.use('/peaks', require('./mountain'))
router.use('/ranges', require('./range'))

module.exports = router