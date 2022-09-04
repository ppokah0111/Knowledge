var express = require("express");
var router = express.Router();

//create mappings
const deptdata = [];
router.get("/", (request, response) => {
  return response.json(deptdata);
});

router.get("/id", (request, response) => {
  let data = {};
  for (let i = 0; i < deptdata.length; i++) {
    if (deptdata[i].id == request.query.id) {
      data = deptdata[i];
      break;
    }
  }

  //debugging with console
  console.log(data);
  console.log(request.query.id);
  console.log(deptdata);

  return response.json(data);
});

//DELETE by ID
router.delete("/", (request, response) => {
  let index = -1;
  for (let i = 0; i < deptdata.length; i++) {
    if (deptdata[i].id == request.query.id) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    deptdata.splice(index, 1); //deletes the element at this, index = 1
  }
  return response.json(index);
});

//PUT is for UPDATE
router.put("/", (request, response) => {
  let index = -1;
  for (let i = 0; i < deptdata.length; i++) {
    if (deptdata[i].id == request.body.id) {
      index = i;
      deptdata[i] = request.body;
      break;
    }
  }
  return response.json(index);
});

router.post("/", (request, response) => {
  let user = request.body;
  deptdata.push(user);
  return response.json({ success: true });
});

module.exports = router;
