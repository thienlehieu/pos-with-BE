const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '300298',
  database: 'pos'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log("Connection success");
});

app.get('/api/items', (req, res) => {
  var sql = "SELECT * FROM items";
  connection.query(sql, function(err, results) {
    res.json({items: results});
  });
});

app.listen(4000, () => console.log('App listening on port 4000'));