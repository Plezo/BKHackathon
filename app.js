  // loads things needed for project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// uses ejs view engine
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(bodyParser.urlencoded 
({
    extended: true
}));

app.use(bodyParser.json());

// GET home page.
app.get('/', function(req, res, next) 
{
  res.render('home');
});

// GET service page
app.get('/services', function(req, res, next)
{
  res.render('services');
});

// GET explore page
app.get('/about', function(req, res, next)
{
  res.render('about');
});

// GET delivery page
app.get('/faq', function(req, res, next)
{
  res.render('faq');
});

// GET customize page
app.get('/customize', function(req, res, next)
{
  res.render('customize');
});

// Runs server on port 3000
app.listen(process.env.PORT || 3000, () => 
{
    console.log("Server is on.");
});