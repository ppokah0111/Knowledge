var queryhelper = require("./queryhelper").queryhelper
var mongo = require('mongodb');

var express = require("express");
var router = express.Router();

const treatmentCollections = "treatment"

//var o_id = new mongo.ObjectID(theidID);

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/emp
router.get("/", (request, response) => {   
  try {
    return queryhelper.selectall(treatmentCollections,(data) => response.json(data))
  } catch (error) {
    console.log("GET all TREATMENT: " + error)
    return response.json({success: false})
  }
   
});

//For mapping example - localhost:3000/treatment/id?age=40 or localhost:3000/history/id?_id=62f75611727df22807ab44a9
//GET ID - //to check in postman GET > param, enter localhost:3000/department/id?id=3
//var o_id = new mongo.ObjectID(theidID);
router.get("/id", (request, response) => {
    try {
      let param = request.query;

      return queryhelper.selectbyparam(treatmentCollections,param, (data) => response.json(data))
    } catch (error) {
      console.log("GET id TREATMENT: " + error)
      return response.json({success: false})
    }

  });


//PUT is for UPDATE
router.put("/", (request, response) => {

    try {
        let param = request.body;
  
        console.log(param)
        return queryhelper.update(treatmentCollections, param, (data) => response.json(data))
  
    } catch (error) {
        console.log("UPDATE TREATMENT: " + error)
        return response.json({success: false})
    }

    
  });


//DELETE - using deleteMany and the param doesn't require an array
router.delete("/", (request, response) => {
    try {
        let param = request.query;

        console.log(param)
        return queryhelper.deletebyparam(treatmentCollections, param, (data) => response.json(data))
    } catch (error) {
        console.log("DELETE TREATMENT: " + error)
        return response.json({success: false})
    }
  });


//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
// enter http://localhost:3000/treatment  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  try {
      let param = request.body;
      return queryhelper.insert(treatmentCollections, [param], (data) => response.json(data))
  } catch (error) {
      console.log("POST/INSERT TREATMENT: " + error)
      return response.json({success: false})
  }
});


module.exports = router;