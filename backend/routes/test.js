var express = require('express');
var router = express.Router();
var test = require('../data/test.json');

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  const test = test.filter(function(test){
      return test.id === id;
  });
  res.send(test);
});



module.exports = router;
