var con = require("./con").con;
var mysql = require("mysql2");

//INSERT - POST
function insert(sql, param, callback) {
  con.connect(function (err) {
    if (err) console.log(err);

    con.query(sql, [param], function (err, result) {
      if (err) console.log(err);

      callback({ success: true }); //response.json({ success: true });
    });
  });
}

//SELECT ALL - GET ALL
function selectall(sql, callback) {
  con.connect(function (err) {
    if (err) console.log(err);
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);

      return callback(result); //return response.json(result);
    });
  });
}

//GET ID - SELECT based on id/PARAM
function selectbyparam(sql, param, callback) {
  con.connect(function (err) {
    if (err) console.log(err);

    con.query(sql, [param], function (err, result, fields) {
      if (err) console.log(err);
      return callback(result); // response.json(result);
    });
  });
}

//DELETE

function deletebyparam(sql, param, callback) {
  con.connect(function (err) {
    if (err) console.log(err);

    con.query(sql, [param], function (err, result) {
      if (err) console.log(err);

      callback({ success: true }); //response.json({ success: true });
    });
  });
}

//UPDATE/PUT
function update(numParams, data, callback) {
  let updateQuery = "UPDATE ?? SET " + numParams + " WHERE ?? = ?";
  console.log(updateQuery);

  let query = mysql.format(updateQuery, data);
  console.log(query);

  con.connect(function (err) {
    if (err) console.log(err);
    con.query(query, function (err, result) {
      if (err) console.log(err);

      callback({ success: true }); //response.json({ success: true });
    });
  });

  // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'
}

var queryhelper = { insert, selectall, selectbyparam, deletebyparam, update };
exports.queryhelper = queryhelper;
