const express = require('express');
const app = express();
module.exports = app;

const path = require('path');
const volleyball = require('volleyball');
const { static } = express;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(volleyball)

app.use('/dist', static(path.join(__dirname, '..', 'dist')));

app.use(express.static(path.join(__dirname, '..', 'public')))


app.use('/api', require('./api'))

// This middleware will catch any URLs resembling a file extension
// for example: .js, .html, .css
// This allows for proper 404s instead of the wildcard '#<{(|' catching
// URLs that bypass express.static because the given file does not exist.
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  try{
    console.log('is this test working?')
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'))
  }
  catch(error){
    next(error)
  }
})
