let express = require('express');
let parser = require('../services/parseFile');


let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('parsedFile', { title: 'File parser example' });
});

router.get('/start', function(req, res, next) {
  parser.getSolution().then((data) => {
    res.json(data);
  });
});

module.exports = router;
