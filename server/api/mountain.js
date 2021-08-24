const router = require('express').Router();
const { Mountain, Range } = require('../db');

router.get('/', async (req, res, next) => {
  try{
    res.send( await Mountain.findAll( { include: Range }))
  }
  catch(error){
    next(error)
  }
})

module.exports = router;