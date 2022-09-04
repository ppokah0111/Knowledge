var express = require("express");
var router = express.Router();

//create mappings
const userdata = [];
router.get("/", (request, response) => {
  return response.json(userdata);
});

router.get("/id", (request, response) => {
  let data = {};
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].id == request.query.id) {
      data = userdata[i];
      break;
    }
  }

  //debugging with console
  console.log(data);
  console.log(request.query.id);
  console.log(userdata);

  return response.json(data);
});

//DELETE by ID
router.delete("/", (request, response) => {
  let index = -1;
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].id == request.query.id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    userdata.splice(index, 1); //deletes the element at this, index = 1
  }
  return response.json(index);
});

//PUT is for UPDATE/INSERT
router.put("/", (request, response) => {
  let index = -1;
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].id == request.body.id) {
      index = i;
      userdata[i] = request.body;
      break;
    }
  }
  return response.json(index);
});

//POST is for SEND/CREATE
router.post("/", (request, response) => {
  let user = request.body;           //How can you be sure something came from the other end especially if it is not via postman
  userdata.push(user);
  return response.json({ success: true });
});

module.exports = router;
