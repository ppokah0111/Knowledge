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

var pat1 = require("./medPatient"); //actual file medDoctor.js in express hospital folder
app.use("/patient", pat1); //check with /patient url in postman or web

var doc1 = require("./medDoctor"); //actual file medDoctor.js in express hospital folder
app.use("/doctor", doc1); //check with /patient url in postman or web

var his1 = require("./medPatientHistory"); //actual file medPatientHistory.js in express hospital folder
app.use("/history", his1); //check with /history url in postman or web

var treat1 = require("./medPatientTreatment"); //actual file medPatientTreatment.js in express hospital folder
app.use("/treatment", treat1); //check with /treatment url in postman or web

app.listen(3000, () =>
  console.log("Hospital Medical records server has started")
);

/*** "node server.js" to run server **/
