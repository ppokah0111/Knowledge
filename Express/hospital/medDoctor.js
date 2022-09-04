var con = require("./con").con
var queryhelper = require("./queryhelper").queryhelper

var express = require("express");
var router = express.Router();

const selectalldoctorsql = "SELECT * FROM doctor";
const selectbyparamdoctorslq = "SELECT * FROM doctor where id=?";
const deletedoctorsql = "delete from doctor where id=?";
const insertdoctorsql = "insert into doctor(id,name,specialty) values ?";

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {   
  try {
    return queryhelper.selectall(selectalldoctorsql,(data) => response.json(data))
  } catch (error) {
    console.log("GET all DOCTOR: " + error)
    return response.json({success: false})
  }
   
});

//GET ID - //to check in postman GET > param, enter localhost:3000/department/id?id=3
router.get("/id", (request, response) => {
    try {
      let param = request.query.id;
      return queryhelper.selectbyparam(selectbyparamdoctorslq,param, (data) => response.json(data))
    } catch (error) {
      console.log("GET id DOCTOR: " + error)
      return response.json({success: false})
    }

  });



//PUT is for UPDATE
router.put("/", (request, response) => {

    try {

        let datatoupdate = ['doctor', 'name', request.body.name, 'id', request.body.id,  'specialty', request.body.specialty, 'id', request.body.id]

        let numParams = ""
        for(let property in request.body){
          numParams = numParams + "?? = ?," 
        }
        let pos = numParams.lastIndexOf(',');
        numParams= numParams.substring(0,pos) + ''+ numParams.substring(pos+1)

        return queryhelper.update(numParams, datatoupdate, (data) => response.json(data))

    } catch (error) {
        console.log("PUT DOCTOR: " + error)
        return response.json({success: false})
    }

  });


//DELETE by ID
router.delete("/", (request, response) => {
    try {
        let param = [[request.query.id]];
        return queryhelper.deletebyparam(deletedoctorsql, param, (data) => response.json(data))
    } catch (error) {
        console.log("DELETE DOCTOR: " + error)
        return response.json({success: false})
    }
  });

//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
// enter http://localhost:3000/doctor  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  try {
      let param = [[request.body.id, request.body.name, request.body.specialty]];
      return queryhelper.insert(insertdoctorsql, param, (data) => response.json(data))
  } catch (error) {
      console.log("POST/INSERT DOCTOR: " + error)
      return response.json({success: false})
  }
});


module.exports = router;