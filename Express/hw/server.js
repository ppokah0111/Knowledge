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

server.js */

var express = require("express");
var app = express();
app.get("/", (request, response) => {
  return response.send("hw server: Hello World");
});

app.listen(3000, () => console.log("hw server has started"));

/*** "node server.js" to run server **/
