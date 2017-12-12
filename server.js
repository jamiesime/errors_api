var express = require("express");
var app = express();
var path = require("path");
var parser = require('body-parser');
var ObjectId = require("mongodb").ObjectId;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/errors", function(err, database){
  if (err){
    return console.log(err);
  }
  db = database;
  console.log("connected to db");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.get("/errors", function(req, res){
    db.collection("errorLogs").find().toArray(function(err, results){
    if (err){
      return console.log(err);
    }
    res.json(results);
  });
})

app.post("/errors", function(req, res){
    db.collection("errorLogs").save(req.body, function(err, result){
    if (err){
      return console.log("err");
    }
    res.redirect("/");
  });
})

app.post("/delete/:errorID", function(req, res){
  db.collection("errorLogs").remove( { "_id": ObjectId(req.params.errorID) } );
  res.redirect("/");
});
