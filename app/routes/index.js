var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getJson",function(req,res){
  res.send({"name":["Jason","Hank"],"age":[18,20]})
})

module.exports = router;
