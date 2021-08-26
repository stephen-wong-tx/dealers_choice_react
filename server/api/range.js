const router = require('express').Router();
const { useReducer } = require('react');
const { Mountain, Range } = require('../db');

router.get('/', async (req, res, next) => {
  try{
    res.send( await Range.findAll( { include: Mountain}))
  }
  catch(error){
    next(error)
  }
})

router.get('/:id', async(req, res, next) => {
  try{
    res.send(await Range.findByPk(req.params.id, { include: Mountain }));
  }
  catch(error){
    next(error);
  }
})

module.exports = router;