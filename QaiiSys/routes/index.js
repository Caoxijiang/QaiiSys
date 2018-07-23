var express = require('express');
var router = express.Router();
var admininfoDao=require('../dao/adminloginDao');
/* GET home page. */
router.get('/', function(req, res, next) {
  admininfoDao.selectAlladminInfo(function(data){
    console.log(JSON.stringify(data))
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
