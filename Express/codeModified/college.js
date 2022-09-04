var con = require("./con").con
var queryhelper = require("./queryhelper").queryhelper

var express = require("express");
var router = express.Router();

//GET ALL
//create mappings
//to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {
   let sql = "SELECT * FROM department"    
   
   return queryhelper.selectall(sql,(data) => response.json(data))
  
  });

//GET ID
//to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {

    let param = request.query.id;
    let sql = "SELECT * FROM department where id=?"

    return queryhelper.selectbyparam(sql,param, (data) => response.json(data))
  });

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
    //let param = 2
    let param = [[request.body.id]];
    let sql = "update department set size= " + request.body.size +  ", name=' "  +  request.body.name  +  " ' where id=?";

    return queryhelper.update(sql, param, (data) => response.json(data))

  });


//DELETE
//DELETE by ID
router.delete("/", (request, response) => {
    let param = [[request.query.id]];
    let sql =  "delete from department where id=?";
    return queryhelper.deletebyparam(sql, param, (data) => response.json(data))

  });



//INSERT
//POST is for SEND/CREATE /Insert
//to check in postman POST > body, enter http://localhost:3000/department  and
// in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  let param = [[request.body.id, request.body.name, request.body.size]];

  let sql = "insert into department(id,name,size) values ?";

  return queryhelper.insert(sql, param, (data) => response.json(data))
});



module.exports = router;
