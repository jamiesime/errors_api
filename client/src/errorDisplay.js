var ErrorDisplay = function(errors){
  this.render(errors);
}

ErrorDisplay.prototype = {
  render: function(errors)
    {
      var ul = document.getElementById("error-list");

      errors.forEach( function(error){
        var errorID = error._id;
        var deleteForm = buildDeleteButton(errorID);
        var li = document.createElement("li");
        li.innerText = error.description;
        li.appendChild(deleteForm);
        ul.appendChild(li);
      });
    }
}

var buildDeleteButton = function(errorID){
  var delForm = document.createElement("form");
  delForm.method = "POST";
  delForm.action = "/delete/" + errorID;
  var deleteBtn = document.createElement('button');
  deleteBtn.classNane = "delete-btn";
  deleteBtn.innerText = "X";
  delForm.appendChild(deleteBtn);
  return delForm;
}

module.exports = ErrorDisplay;
