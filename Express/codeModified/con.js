var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

 exports.con = con;