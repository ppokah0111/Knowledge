var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

var express = require("express");
var router = express.Router();

//create mappings
//to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("SELECT * FROM emp ", function (err, result, fields) {
      if (err) throw err;
      return response.json(result);
    });
  });
});

//to check in postman GET > param, enter localhost:3000/emp/id?id=3
router.get("/id", (request, response) => {
  let param = request.query.id;
  console.log("param", param);

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query(
      "SELECT * FROM emp where id=?",
      [param],
      function (err, result, fields) {
        if (err) throw err;
        return response.json(result);
      }
    );
  });
});

//DELETE by ID
router.delete("/", (request, response) => {
  let data = [[request.query.id]];
  console.log(data)

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "delete from emp where id=?";

    con.query(sql, [data], function (err, result) {
      if (err) throw err;
      
     return response.json({ success: true });

    });
  });
});

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
  //let param = 2
  let data = [[request.body.id]];

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "update emp set age= " + request.body.age +  ", name= ' "  +  request.body.name  +  " ' where id=?";
    con.query(sql, [data], function (err, result) {
      if (err) throw err;
      response.json({ success: true });
    });
  });
});

//POST is for SEND/CREATE /Insert
//to check in postman POST > body, enter http://localhost:3000/emp  and
// in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  let data = [[request.body.id, request.body.name, request.body.age]];

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "insert into emp(id,name,age) values ?";

    con.query(sql, [data], function (err, result) {
      if (err) throw err;
      response.json({ success: true });
    });
  });
});

module.exports = router;
