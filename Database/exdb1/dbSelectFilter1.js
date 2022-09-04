var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("SELECT * FROM emp where id=1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(fields);
  });
});
