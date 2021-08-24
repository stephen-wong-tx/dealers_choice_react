const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/14er_react_db');
// const { Mountain } = require('./mountain');
// const { Range } = require('./range');

// const [ mountainData, rangeData ] = require('../../dataFiles/');

// const syncAndSeed = async() => {
//   await db.sync({ force: true });

//   const ranges = await Promise.all(rangeData.map( range => Range.create(range)));
//   await Promise.all(mountainData.map( mountain => Mountain.create({...mountain, rangeID: ranges.find( range => range.ID === mountain.RangeID ).ID})));
// };


module.exports = db