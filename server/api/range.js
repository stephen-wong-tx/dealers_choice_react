const router = require('express').Router();
const { Mountain, Range } = require('../db');

router.get('/', async (req, res, next) => {
  try{
    res.send( await Range.findAll( { include: Mountain}))
  }
  catch(error){
    next(error)
  }
})

module.exports = router;