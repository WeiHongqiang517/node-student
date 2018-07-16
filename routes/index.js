var express = require('express');
var db = require('./../db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var mysqlParams = [
    req.body.name,
    req.body.chinese,
    req.body.english,
    req.body.math
  ];

  var mysqlQuery = 'INSERT student (name, chinese, english, math) VALUES (?,?,?,?)';
  db.DBConnection.query(mysqlQuery, mysqlParams, function(err, rows, fields){
    if(err){
      console.log(err);
      return
    }
    var success = {
      message : "增加成功"
    };
    res.send(success)
  });
});

module.exports = router;
