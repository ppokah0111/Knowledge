var con = require("./con").con

var express = require("express");
var router = express.Router();

//GET ALL
//create mappings
//to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {

   con.connect(function (err) {
    //con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
  
      con.query("SELECT * FROM department ", function (err, result, fields) {
        if (err) throw err;
        return response.json(result);
      });
    });
  });

//GET ID
//to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {

    let param = request.query.id;
    //console.log("param", param);
  
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
  
      con.query(
        "SELECT * FROM department where id=?",[param], function (err, result, fields) {
          if (err) throw err;
        return response.json(result);
        }
      );
    });
  });


//PUT / UPDATE
//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
    //let param = 2
    let data = [[request.body.id]];
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
  
      let sql = "update department set size= " + request.body.size +  ", name=' "  +  request.body.name  +  " ' where id=?";
      con.query(sql, [data], function (err, result) {
        if (err) throw err;
        response.json({ success: true });
      });
    });
  });


//DELETE
//DELETE by ID
router.delete("/", (request, response) => {
    let data = [[request.query.id]];
    console.log(data)
  
    con.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
  
      let sql = "delete from department where id=?";
  
      con.query(sql, [data], function (err, result) {
        if (err) throw err;
        
       return response.json({ success: true });
  
      });
    });
  });

//INSERT
//POST is for SEND/CREATE /Insert
//to check in postman POST > body, enter http://localhost:3000/department  and
// in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  let data = [[request.body.id, request.body.name, request.body.size]];

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "insert into department(id,name,size) values ?";

    con.query(sql, [data], function (err, result) {
      if (err) throw err;
      response.json({ success: true });
    });
  });
});

module.exports = router;
