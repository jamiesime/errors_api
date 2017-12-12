var ErrorDisplay = require("./errorDisplay.js");

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function(){
  if (this.status !== 200 ) return;
  var jsonString = this.responseText;
  var response = JSON.parse(jsonString);
  showContent(response);
}

var showContent = function(errors){
  var showErrors = new ErrorDisplay(errors);
}

var app = function(){
  url = "http://localhost:3000/errors";
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);
