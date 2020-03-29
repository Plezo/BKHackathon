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
router.get('/explore', function(req, res, next)
{
  res.render('explore');
});

// GET delivery page
router.get('/delivery', function(req, res, next)
{
  res.render('delivery');
});

module.exports = router;
