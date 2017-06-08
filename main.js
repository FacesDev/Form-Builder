var title = document.createElement("H1");
title.textContent = 'Sign up for my Web App'
console.log([title]);
var container = document.querySelector("#container");
container.appendChild(title)




// var formElement = document.querySelector("#container");

for (var i = 0; i <formData.length; i++) {

  var control = formData[i];
  if (control.type === "textarea") {
    var inputElement = document.createElement('textarea');

  }else if (control.type === "select") {
    var inputElement = document.createElement('select');

  }
  else {
    var inputElement = document.createElement('input');

  }

  inputElement.id = control.id;
  inputElement.type = control.type;
  inputElement.placeholder = control.label;
  container.appendChild(inputElement);
  }
