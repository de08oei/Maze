/* global p5 width height*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => {});

//set up
p.setup = function() {
  p.createCanvas(800, 600);
}

//TITLE PAGE

//TITLE
p.textSize(32)

//Start button
function myFunction() {
  var x = document.getElementById("startBtnId");
  x.disabled = true;
}
