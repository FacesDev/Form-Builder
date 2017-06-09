var title = document.createElement("H1");
title.textContent = 'Sign up for my Web App';
container.appendChild(title);

for (var i = 0; i <formData.length; i++) {
  var control = formData[i];
  if (control.type === "textarea") {
    var inputElement = document.createElement('textarea');
  }else if (control.type === "select") {
    var inputElement = document.createElement('select');
    for (var j = 0; j < control.options.length; j++) {

      var optionElement = document.createElement('option');

      optionElement.label = formData[i].options[j].label;

      optionElement.value = formData[i].options[j].value;

      inputElement.appendChild(optionElement);
}
}

  else {
    var inputElement = document.createElement('input');
  }
inputElement.placeholder = control.label;

inputElement.id = control.id;
inputElement.type = control.type;
 container.appendChild(inputElement);

  }
var bottomDiv = document.createElement("div");
bottomDiv.id = "bottomDiv";
container.appendChild(bottomDiv);

var submit = document.createElement("input");
submit.setAttribute("type", "submit");
bottomDiv.appendChild(submit);
