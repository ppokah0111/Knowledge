var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

let param = 2

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("update emp set age=30 where id=?", [param], function (err, result, fields) {
  //con.query("SELECT * FROM emp where id=?", [param], function (err, result, fields) {
    if (err) throw err;
    //console.log(result[0].name);
    console.log(result)
  });
});
