var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var database = "training";

//All addresses that starts with S
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db(database);
  var query = { address: /^S/ };
  dbo
    .collection("customers")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
