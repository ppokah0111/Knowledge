var con = require("./con").con
var queryhelper = require("./queryhelper").queryhelper

var express = require("express");
var router = express.Router();

const selectallpatientsql = "SELECT * FROM patient";
const selectbyparampatientslq = "SELECT * FROM patient where id=?";
const deletepatientsql = "delete from patient where id=?";
const insertpatientsql = "insert into patient(id,name,age,phone) values ?";

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {   
  try {
      return queryhelper.selectall(selectallpatientsql,(data) => response.json(data))
  } catch (error) {
      console.log("GET all PATIENT: " + error)
      return response.json({success: false})
  }
});

//GET ID - //to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {
    try {
        let param = request.query.id;
        return queryhelper.selectbyparam(selectbyparampatientslq,param, (data) => response.json(data))
    } catch (error) {
      console.log("GET id PATIENT: " + error)
      return response.json({success: false})
    }

  });

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {

  try {
      let datatoupdate = ['patient', 'name', request.body.name, 'id', request.body.id,  
      'age', request.body.age, 'phone', request.body.phone, 'id', request.body.id]
    
      let numParams = ""
      for(let property in request.body){
        numParams = numParams + "?? = ?," 
      }
    
      let pos = numParams.lastIndexOf(',');
      numParams= numParams.substring(0,pos) + ''+ numParams.substring(pos+1)
    
      return queryhelper.update(numParams, datatoupdate, (data) => response.json(data))

  } catch (error) {

      console.log("PUT PATIENT: " + error)
      return response.json({success: false})
  }
});

//DELETE by ID
router.delete("/", (request, response) => {
    try {
        let param = [[request.query.id]];
        return queryhelper.deletebyparam(deletepatientsql, param, (data) => response.json(data))
    } catch (error) {
        console.log("DELETE PATIENT: " + error)
        return response.json({success: false})
    }
});

//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
// enter http://localhost:3000/patient  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  try {
      let param = [[request.body.id, request.body.name, request.body.age, request.body.phone]];
      return queryhelper.insert(insertpatientsql, param, (data) => response.json(data))
  } catch (error) {
      console.log("INSERT PATIENT: " + error)
      return response.json({success: false})
  }
});

module.exports = router;