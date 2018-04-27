var express = require('express');
const mysql = require('mysql');
var router = express.Router();

const connection = mysql.createConnection({
  host: '101.132.140.59',
  user: 'minapp',
  password: 'minapp123xia',
  port: '3306',
  database: 'minapp',
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/taobao', (req, res, next) => {
  connection.connect();

  var sql = 'SELECT * FROM taobao';
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    res.send(result);

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
  });

  connection.end();
})

module.exports = router;
