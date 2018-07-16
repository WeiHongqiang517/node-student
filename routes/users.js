var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var mysqlQuery = 'SELECT * FROM student'
  db.DBConnection.query(mysqlQuery, function(err, rows, fields){
    if(err){
      console.log(err);
      return;
    }
    res.render('user', {student: rows})
  })
});

module.exports = router;
