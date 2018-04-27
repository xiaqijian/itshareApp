var express = require('express');
const mysql = require('mysql');
var router = express.Router();

const dbconfig = {
  host: '101.132.140.59',
  user: 'minapp',
  password: 'minapp123xia',
  port: '3306',
  database: 'minapp'
}

// var connection = mysql.createConnection(dbconfig);
var pool = mysql.createPool(dbconfig)
// connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/taobao', (req, res, next) => {
 

  var sql = 'SELECT * FROM taobao';
  //查
  // connection.query(sql, function (err, result) {
  //   if (err) {
  //     console.log('[SELECT ERROR] - ', err.message);
  //     return;
  //   }
  //   res.send(result);

  //   console.log('--------------------------SELECT----------------------------');
  //   console.log(result);
  //   console.log('------------------------------------------------------------\n\n');
  // });
  pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(sql, function (err, rows) {
      if (err) console.log(err);
      console.log("SELECT ==> ");
      res.send(rows);
      // for (var i in rows) {
      //     console.log(rows[i]);
      // }
      conn.release();
    });
  });

  // connection.end();
})

module.exports = router;
