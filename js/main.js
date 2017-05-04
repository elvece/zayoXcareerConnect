function getName(){
  var name = prompt("What is your name?");

  if (name != null) {
      document.getElementById("name").innerHTML =
      "Hello " + name + "!";
  }
}

function colorChange(id){
  var background = document.getElementById(id).style.backgroundColor;
  if(background === 'rgb(1, 193, 140)'){
    color = 'rgb(255,255,255)';
  } else {
    color = 'rgb(1, 193, 140)';
  }
  document.body.style.background = color;
}
