var con = require("./con").con
var queryhelper = require("./queryhelper").queryhelper

var express = require("express");
var router = express.Router();

const selectalltreatmentsql = "SELECT * FROM patient_treatment";
const selectbyparamtreatmentslq = "SELECT * FROM patient_treatment where id=?";
const deletetreatmentsql = "delete from patient_treatment where id=?";
const inserttreatmentsql = "insert into patient_treatment(id, patient_id, doctor_id , treatment , treatment_start_date ) values ?";

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {   
    try {
        return queryhelper.selectall(selectalltreatmentsql,(data) => response.json(data))
    } catch (error) {
        console.log("GET all PATIENT TREATMENT: " + error)
        return response.json({success: false})
    }
   
  });

//GET ID - //to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {
    try {
        let param = request.query.id;
        return queryhelper.selectbyparam(selectbyparamtreatmentslq,param, (data) => response.json(data))
    } catch (error) {
        console.log("GET id PATIENT TREATMENT: " + error)
        return response.json({success: false})
    }


  });

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
  try {
      //table name in sql is patient_treatment
      let datatoupdate = ['patient_treatment', 'patient_id', request.body.patient_id, 'id', request.body.id, 'doctor_id', request.body.doctor_id,  
      'treatment', request.body.treatment, 'treatment_start_date', request.body.treatment_start_date, 'id', request.body.id]

      let numParams = ""
      for(let property in request.body){
        numParams = numParams + "?? = ?," 
      }

      let pos = numParams.lastIndexOf(','); //removing the last comma from the for loop above
      numParams= numParams.substring(0,pos) + ''+ numParams.substring(pos+1) //turning into one long concatenated string

      return queryhelper.update(numParams, datatoupdate, (data) => response.json(data))

  } catch (error) {
      console.log("PUT PATIENT TREATMENT: " + error)
      return response.json({success: false})
  }

});


//DELETE by ID
router.delete("/", (request, response) => {
    try {
        let param = [[request.query.id]];
        return queryhelper.deletebyparam(deletetreatmentsql, param, (data) => response.json(data))

    } catch (error) {
        console.log("DELETE PATIENT TREATMENT: " + error)
        return response.json({success: false})
    }
   
});


//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
// enter http://localhost:3000/treatment and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
//"insert into patient_treatment(id, patient_id, doctor_id , treatment , treatment_date )
router.post("/", (request, response) => {
  try {
      let param = [[request.body.id, request.body.patient_id, request.body.doctor_id, request.body.treatment, request.body.treatment_start_date ]];
      return queryhelper.insert(inserttreatmentsql, param, (data) => response.json(data))
  } catch (error) {
      console.log("DELETE PATIENT TREATMENT: " + error)
      return response.json({success: false})
  }

});


module.exports = router;