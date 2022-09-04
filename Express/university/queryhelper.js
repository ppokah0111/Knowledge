var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var database = "university";
var mongo = require('mongodb');

//INSERT - POST insertMany.js
function insert(collection, param, callback) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(database);
      dbo.collection(collection).insertMany(param, function (err, res) {
        if (err) throw err;
        callback(res);
        db.close();
      });
    });
  }
  
  //SELECT ALL - GET ALL
  function selectall(collection, callback) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(database);
      dbo
        .collection(collection)
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          callback(result);
          db.close();
        });
    });
  }
  
  //GET ID - SELECT based on id/PARAM
  function selectbyparam(collection, param, callback) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(database);
  
      if(param._id){
        param._id = new mongo.ObjectID(param._id);
      }
  
      dbo
        .collection(collection)
        .find(param)
        .toArray(function (err, result) {
          if (err) throw err;
          console.log(result)
          callback(result);
          db.close();
        });
    });
  }
  
  //DELETE
  function deletebyparam(collection, param, callback) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(database);
  
     /*  if(param._id){
        param._id = new mongo.ObjectID(param._id);
      } */
  
      console.log(param)
      var myquery = { _id: { $in: [param._id] } };  //WE MADE SLIGHT CHANGE
      console.log(myquery)

      dbo.collection(collection).deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        callback(obj);
        db.close();
      });
    });
  }

   //DELETE
   function deletebyparamId(collection, param, callback) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(database);
  
     if(param._id){
        param._id = new mongo.ObjectID(param._id);
      }
  
      console.log(param)
      var myquery = { _id: { $in: [param._id] } };  //WE MADE SLIGHT CHANGE
      console.log(myquery)

      dbo.collection(collection).deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        callback(obj);
        db.close();
      });
    });
  }
  
  //UPDATE/PUT
  function update(collection, data, callback) {
  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(database);
  
      if(data._id){
        data._id = new mongo.ObjectID(data._id);
      }
  
      var  _id = {_id:data._id}
      var newvalues = {$set: data };
  
      dbo.collection(collection).updateMany(_id, newvalues, function(err, res) {
        if (err) throw err;
        //console.log(JSON.stringify(res) + " document(s) updated");
        callback(res)
        db.close();
      });
    });
  
  }
  
  var queryhelper = { insert, selectall, selectbyparam, deletebyparam, deletebyparamId, update };
  exports.queryhelper = queryhelper;