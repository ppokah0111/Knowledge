var queryhelper = require("./queryhelper").queryhelper
var mongo = require('mongodb');
var express = require("express");
var router = express.Router();

const assignCollections = "assigns"


//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/students
router.get("/", (request, response) => {   
    try {
      return queryhelper.selectall(assignCollections,(data) => response.json(data))
    } catch (error) {
      console.log("GET all ASSIGNMENTS: " + error)
      return response.json({success: false})
    }
     
  });
  
  //For mapping example - localhost:3000/doctor/id?age=40
  //GET ID - //to check in postman GET > param, enter localhost:3000/students/id?id=3
  router.get("/id", (request, response) => {
      try {
        let param = request.query;
        return queryhelper.selectbyparam(assignCollections,param, (data) => response.json(data))
      } catch (error) {
        console.log("GET id ASSIGNMENTS: " + error)
        return response.json({success: false})
      }
  
    });

  //student_assign [student_id, assign_id, course_id, mark, cutoff_id]
  //For mapping example - localhost:3000/doctor/id?age=40
  //GET ID - //to check in postman GET > param, enter   //http://localhost:4000/assigns/user?student_id=23543
  //Get all - get all assignments of a student with a particular student_id
  router.get("/user", (request, response) => {
    try {
      
      let param = request.query;
      console.log(param)

       queryhelper.selectbyparam('students',param, (data) => {
        console.log(data)
        let classid = []
        classid = data.map(d => d.class_id)
          queryhelper.selectbyparam('classes',{class_id:{$in:classid}}, (data) => {   //data[0].class_id
            console.log(data)
            let courseid = []
            courseid = data.map(d => d.course_id)
            queryhelper.selectbyparam('assigns',{course_id:{$in:courseid}}, (data) => {
              console.log(data)
              response.json(data)
            })
          })
       })
    } catch (error) {
      console.log("GET id STUDENT > CLASSES > COURSES > ASSIGNS: " + error)
      return response.json({success: false})
    }

  });
  

  
  //PUT is for UPDATE
  router.put("/", (request, response) => {
  
    try {
        let param = request.body;
  
        console.log(param)
        return queryhelper.update(assignCollections, param, (data) => response.json(data))
  
    } catch (error) {
        console.log("UPDATE ASSIGNMENTS: " + error)
        return response.json({success: false})
    }
  
    });
  
  
  //DELETE - using deleteMany and the param doesn't require an array
  router.delete("/", (request, response) => {
      try {
          let param = request.query;
  
          console.log(param)
          return queryhelper.deletebyparamId(assignCollections, param, (data) => response.json(data))
      } catch (error) {
          console.log("DELETE ASSIGNMENTS: " + error)
          return response.json({success: false})
      }
    });
  
  
  //INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
  // enter http://localhost:3000/students  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
  router.post("/", (request, response) => {
    try {
        let param = request.body;
        return queryhelper.insert(assignCollections, [param], (data) => response.json(data))
    } catch (error) {
        console.log("POST/INSERT ASSIGNMENTS: " + error)
        return response.json({success: false})
    }
  });
  
  
  module.exports = router;