var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) 
{
  res.render('home');
});

// GET service page
router.get('/services', function(req, res, next)
{
  res.render('services');
});

// GET explore page
router.get('/about', function(req, res, next)
{
  res.render('about');
});

// GET delivery page
router.get('/faq', function(req, res, next)
{
  res.render('faq');
});

module.exports = router;