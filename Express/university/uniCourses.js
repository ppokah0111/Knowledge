var queryhelper = require("./queryhelper").queryhelper
var mongo = require('mongodb');
var express = require("express");
var router = express.Router();

const courseCollections = "courses"


//GET ALL - create mappings - //to check in postman GET > param, enter  localhost:3000/students
router.get("/", (request, response) => {   
    try {
      return queryhelper.selectall(courseCollections,(data) => response.json(data))
    } catch (error) {
      console.log("GET all COURSES: " + error)
      return response.json({success: false})
    }
     
  });
  
  //For mapping example - localhost:3000/doctor/id?age=40
  //GET ID - //to check in postman GET > param, enter localhost:3000/students/id?id=3
  router.get("/id", (request, response) => {
      try {
        let param = request.query;
        return queryhelper.selectbyparam(courseCollections,param, (data) => response.json(data))
      } catch (error) {
        console.log("GET id COURSES: " + error)
        return response.json({success: false})
      }
  
    });


      //For mapping example - localhost:3000/doctor/id?age=40
  //GET ID - //to check in postman GET > param, enter localhost:3000/students/id?id=3
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
            queryhelper.selectbyparam('courses',{course_id:{$in:courseid}}, (data) => {
              console.log(data)
              response.json(data)
            })
          })
       })
    } catch (error) {
      console.log("GET id STUDENT > CLASSES > COURSES: " + error)
      return response.json({success: false})
    }

  });

  //http://localhost:4000/courses/user?student_id=23543
  
  
  //PUT is for UPDATE
  router.put("/", (request, response) => {
  
    try {
        let param = request.body;
  
        console.log(param)
        return queryhelper.update(courseCollections, param, (data) => response.json(data))
  
    } catch (error) {
        console.log("UPDATE COURSES: " + error)
        return response.json({success: false})
    }
  
    });
  
  
  //DELETE - using deleteMany and the param doesn't require an array
  router.delete("/", (request, response) => {
      try {
          let param = request.query;
  
          console.log(param)
          return queryhelper.deletebyparamId(courseCollections, param, (data) => response.json(data))
      } catch (error) {
          console.log("DELETE COURSES: " + error)
          return response.json({success: false})
      }
    });
  
  
  //INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body, 
  // enter http://localhost:3000/students  and in raw > JSON, enter sometime like {"id": 7, "name":"poroye", "age":91}
  router.post("/", (request, response) => {
    try {
        let param = request.body;
        return queryhelper.insert(courseCollections, [param], (data) => response.json(data))
    } catch (error) {
        console.log("POST/INSERT COURSES: " + error)
        return response.json({success: false})
    }
  });
  
  
  module.exports = router;