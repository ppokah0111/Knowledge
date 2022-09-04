var con = require("./con").con;

//INSERT - POST
function insert(sql, param, callback) {
  con.connect(function (err) {
    if (err) throw err;

    con.query(sql, [param], function (err, result) {
      if (err) throw err;

      callback({ success: true }); //response.json({ success: true });
    });
  });
}

//SELECT ALL - GET ALL
function selectall(sql, callback) {
  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, function (err, result, fields) {
      if (err) throw err;

      return callback(result); //return response.json(result);
    });
  });
}

//GET ID - SELECT based on id/PARAM
function selectbyparam(sql, param, callback) {
  con.connect(function (err) {
    if (err) throw err;

    con.query(sql, [param], function (err, result, fields) {
      if (err) throw err;
      return callback(result); // response.json(result);
    });
  });
}

//DELETE

function deletebyparam(sql, param, callback) {
  con.connect(function (err) {
    if (err) throw err;

    con.query(sql, [param], function (err, result) {
      if (err) throw err;

      callback({ success: true }); //response.json({ success: true });
    });
  });
}

//UPDATE/PUT
function update(sql, param, callback) {
  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [param], function (err, result) {
      if (err) throw err;

      callback({ success: true }); //response.json({ success: true });
    });
  });
}

var queryhelper = { insert, selectall, selectbyparam, deletebyparam, update };
exports.queryhelper = queryhelper;
