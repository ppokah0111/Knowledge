var queryhelper = require("./queryhelper").queryhelper;
var mongo = require("mongodb");
var express = require("express");
var router = express.Router();

const classCollections = "classes";

//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/students
router.get("/", (request, response) => {
  try {
    return queryhelper.selectall(classCollections, (data) =>
      response.json(data)
    );
  } catch (error) {
    console.log("GET all CLASSES: " + error);
    return response.json({ success: false });
  }
});

//For mapping example - localhost:3000/doctor/id?age=40
//GET ID - //to check in postman GET > param, enter localhost:3000/students/id?id=3
router.get("/id", (request, response) => {
  try {
    let param = request.query;
    return queryhelper.selectbyparam(classCollections, param, (data) =>
      response.json(data)
    );
  } catch (error) {
    console.log("GET id CLASSES: " + error);
    return response.json({ success: false });
  }
});



//PUT is for UPDATE
router.put("/", (request, response) => {
  try {
    let param = request.body;

    console.log(param);
    return queryhelper.update(classCollections, param, (data) =>
      response.json(data)
    );
  } catch (error) {
    console.log("UPDATE CLASSES: " + error);
    return response.json({ success: false });
  }
});

//DELETE - using deleteMany and the param doesn't require an array
router.delete("/", (request, response) => {
  try {
    let param = request.query;

    console.log(param);
    return queryhelper.deletebyparamId(classCollections, param, (data) =>
      response.json(data)
    );
  } catch (error) {
    console.log("DELETE CLASSES: " + error);
    return response.json({ success: false });
  }
});

//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body,
// enter http://localhost:3000/marks  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
router.post("/", (request, response) => {
  try {
    let param = request.body;
    return queryhelper.insert(classCollections, [param], (data) =>
      response.json(data)
    );
  } catch (error) {
    console.log("POST/INSERT CLASSES: " + error);
    return response.json({ success: false });
  }
});

module.exports = router;
