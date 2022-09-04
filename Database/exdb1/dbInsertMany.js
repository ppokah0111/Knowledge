var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

let data = [[4, 'Joel Fry', 32 ], [5, 'roy gift', 62], [6, 'james folly', 48]]

con.connect(function (err) {

  if (err) throw err;
    console.log("Connected!");

  let sql = "insert into emp(id,name,age) values ? "

  con.query(sql, [data], function (err, result) {
    if (err) throw err;
        console.log(result.affectedRows + " record inserted");
  });

});

