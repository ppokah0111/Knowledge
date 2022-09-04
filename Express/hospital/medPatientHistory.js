var con = require("./con").con
var queryhelper = require("./queryhelper").queryhelper

var express = require("express");
var router = express.Router();

const selectallhistorysql = "SELECT * FROM patient_history";
const selectbyparamhistoryslq = "SELECT * FROM patient_history where id=?";
const deletehistorysql = "delete from patient_history where id=?";
const inserthistorysql = "insert into patient_history(id, patient_id, illness , from_date , to_date , doctor_id , status) values ?";

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {   

  try {
       return queryhelper.selectall(selectallhistorysql,(data) => response.json(data))
  } catch (error) {
      console.log("GET all PATIENT HISTORY: " + error)
      return response.json({success: false})
  }

});

//GET ID - //to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {
    try {
        let param = request.query.id;
        return queryhelper.selectbyparam(selectbyparamhistoryslq,param, (data) => response.json(data))
    } catch (error) {
      console.log("GET id PATIENT HISTORY: " + error)
      return response.json({success: false})
    }

});

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
  try {
      //table name in sql is patient_history
      let datatoupdate = ['patient_history', 'patient_id', request.body.patient_id, 'id', request.body.id,  
      'illness', request.body.illness, 'from_date', request.body.from_date, 
      'to_date', request.body.to_date, 'doctor_id', request.body.doctor_id, 
      'status', request.body.status, 'id', request.body.id]

      let numParams = ""
      for(let property in request.body){
      numParams = numParams + "?? = ?," 
      }

      let pos = numParams.lastIndexOf(','); //removing the last comma from the for loop above
      numParams= numParams.substring(0,pos) + ''+ numParams.substring(pos+1)

      return queryhelper.update(numParams, datatoupdate, (data) => response.json(data))
  } catch (error) {
      console.log("PUT PATIENT HISTORY: " + error)
      return response.json({success: false})
  }

});


//DELETE by ID
router.delete("/", (request, response) => {
    try {
        let param = [[request.query.id]];
        return queryhelper.deletebyparam(deletehistorysql, param, (data) => response.json(data))
    } catch (error) {
        console.log("DELETE PATIENT HISTORY: " + error)
        return response.json({success: false})
    }

});


//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
// enter http://localhost:3000/history and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
//id, patient_id, illness , from_date , to_date , doctor_id , status
router.post("/", (request, response) => {
  try {
      let param = [[request.body.id, request.body.patient_id, request.body.illness, request.body.from_date, 
                    request.body.to_date, request.body.doctor_id, request.body.status]];
      return queryhelper.insert(inserthistorysql, param, (data) => response.json(data))
  } catch (error) {
      console.log("POST/INSERT PATIENT HISTORY: " + error)
      return response.json({success: false})
  }

});


module.exports = router;