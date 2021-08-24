const db = require('./db');
const { Mountain } = require('./mountain');
const { Range } = require('./range');

Range.hasMany(Mountain);
Mountain.belongsTo(Range);

module.exports = {
  db,
  Mountain,
  Range
}