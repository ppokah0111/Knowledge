/* notes.txt

Express is a server side tool, used to make server services.
Express surports making rest services.
Rest services mostly exposes data in the form of JSON.
JSON stands for javascript object notation
JSON is a means of transfering DATA Uusing KEY value Pair.
EXAMPLE OF JSON {"name": "john", "age":19}
Express is a framework which supports making web applications
To create a node js project, we have to fire " npm init --y "
This creates a Package.JSON
In Package.JSON, we can store various dependencies.
Downloading the express Dependencies, " npm i express "

"node server.js" to run server

server.js 

Install body-parser
---------------------------
npm i body-parser 
*/

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

/* Collections

1. Students
2. teachers
3. Courses
4. Exams
5. Assignments
6. Marks
7. Classes  */

var std = require("./uniStudents"); ///for the uniStudents.js
app.use("/students", std);

var std = require("./uniTeachers"); ///for the uniStudents.js
app.use("/teachers", std);

var std = require("./uniCourses"); ///for the uniStudents.js
app.use("/courses", std);



var std = require("./uniExams"); ///for the uniStudents.js
app.use("/exams", std);

var std = require("./uniAssigns"); ///for the uniStudents.js
app.use("/assigns", std);

var std = require("./uniCutoff"); ///for the uniStudents.js
app.use("/cutoff", std);

var std = require("./uniMarks"); ///for the uniStudents.js
app.use("/marks", std);

var std = require("./uniClasses"); ///for the uniStudents.js
app.use("/classes", std);

var userAuth = require("./uniUser"); ///for the uniUser.js for ADMIN
app.use("/user", userAuth);

app.listen(4000, () =>
  console.log("University Academic records server has started")
);

/*** "node server.js" to run server **/
