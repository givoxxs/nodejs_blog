const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars').create;
const path = require('path');
// import { engine } from 'express-handlebars';
//.create;
const app = express();

// HTTP logger
app.use(morgan('combined'));

// Temple engine
app.engine('hbs', exphbs({
  // chang .handlebars to .hbs
  extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(3000);