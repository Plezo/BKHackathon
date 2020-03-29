var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Hermes'});
});

// GET explore page
router.get('/explore', function(req, res, next)
{
  res.render('explore', { title: 'Hermes'});
});

// GET service page
router.get('/service', function(req, res, next)
{
  res.render('service', { title: 'Hermes'});
});

// GET delivery page
router.get('/delivery', function(req, res, next)
{
  res.render('delivery', { title: 'Hermes'});
});

module.exports = router;
