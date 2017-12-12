var ErrorDisplay = function(errors){
  this.render(errors);
}

ErrorDisplay.prototype = {
  render: function(errors)
    {
      var ul = document.getElementById("error-list");

      errors.forEach( function(error){
        var deleteBtn = document.createElement('button');
        deleteBtn.classNane = "delete-btn";/
        deleteBtn.innerText = "X";
        var li = document.createElement("li");
        li.innerText = error.description;
        li.appendChild(deleteBtn);
        ul.appendChild(li);
      });
    }
}

var buildDeleteButton = function(){
  
}

module.exports = ErrorDisplay;
