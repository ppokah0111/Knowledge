var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var database = "training";

//Sorting by Ascending, if descending, change to var mysort = { name: -1 };
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    var mysort = { name: 1 }; //Sorting based on name in ascending order
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });