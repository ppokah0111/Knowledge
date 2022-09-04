var express = require("express");
var router = express.Router();

let adminUser = { user: "user1", password: "userabcd", role: "admin" };
let studentUser = {
  user: "23543",
  password: "studentabcd",
  role: "student",
};
let teacherUser = {
  user: "teacher1",
  password: "teacherabcd",
  role: "teacher",
};

//INSERT - POST is for SEND/CREATE - Insert to check in postman POST > body,
//querying the server with this authentication details and expecting the response via Login.js
router.post("/", (request, response) => {
  try {
    let param = request.body;

    if (param.user == adminUser.user && param.password == adminUser.password) {
      return response.json(adminUser); //
    } else if (
      param.user == studentUser.user &&
      param.password == studentUser.password
    ) {
      return response.json(studentUser);//
    } else if (
      param.user == teacherUser.user &&
      param.password == teacherUser.password
    ) {
      return response.json(teacherUser);//
    } else {
      return response.json({ user: "invalid" });// what if the password was the incorrect thing and not the user
    }
  } catch (error) {
    console.log("POST USER: " + error);
    return response.json({ success: false });
  }
});

module.exports = router;
