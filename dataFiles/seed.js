const mountainData = require('./mountains');
const rangeData = require('./ranges');

const { db, Mountain, Range } = require('../server/db/');

const syncAndSeed = async() => {
  await db.sync({ force: true });

  const ranges = await Promise.all(rangeData.map( range => Range.create(range)));
  await Promise.all(mountainData.map( mountain => Mountain.create({...mountain, rangeID: ranges.find( range => range.ID === mountain.RangeID ).ID})));
  
  db.close()
  console.log(`
  
    Seeding successful!
  
  `)
};

syncAndSeed().catch(err => {
  db.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})