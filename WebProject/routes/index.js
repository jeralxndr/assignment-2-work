var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Welcome to my site!',
   });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Welcome to my site!',
   });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'My Projects',
   });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Me',
   });
});

/* GET contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me',
   });
});

module.exports = router;
