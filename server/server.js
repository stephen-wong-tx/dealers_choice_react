const { db } = require('./db');
const app = require('./index')

const init = async() => {
  try{
    await db.sync();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(error) {
    next(error);
  }
}

init();