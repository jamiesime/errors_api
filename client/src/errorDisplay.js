var ErrorDisplay = function(errors){
  this.render(errors);
}

ErrorDisplay.prototype = {
  render: function(errors){
    console.log('displaying errors');
    errors.forEAch( function(error){
    var li = document.createElement("li");
    var p = document.createElement("p");
    
    });
  }
}

module.exports = ErrorDisplay;
