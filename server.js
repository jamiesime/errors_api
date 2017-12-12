var express = require("express");
var app = express();
var path = require("path");
var parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

var MongoClient = require("mongodb").MongoClient;


MongoClient.connect("mongodb://localhost:27017/star_wars", function(err, database){
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
