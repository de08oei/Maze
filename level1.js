/* global p5 keyIsDown mouseX mouseY LEFT_ARROW RIGHT_ARROWkeyIsDown keyCode UP_ARROW*/
/*image flagsCollision*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => {});

let playerX, playerY, diameter, flags, flagsX, flagsY;
let wall1, wall2, wall3, wall4, wall5, wall6;

var numberWalls = 6;

p.setup = function() {
  p.createCanvas(800, 450);

  playerX = 160;
  playerY = 435;
  diameter = 30;
  flags = p.loadImage("https://cdn.glitch.com/068918f1-5c6b-4f12-a383-295f0e22eb3a%2Fflags.png?v=1594709944894")
  flagsX = 500;
  flagsY = 50;
  win = false; //defined in other js, it's fine

  wall1 = new Wall(50, 200, 20, 400, "left");
  wall2 = new Wall(50, 200, 400, 20, "up");
  wall3 = new Wall(450, 0, 20, 220, "left");
  wall4 = new Wall(250, 400, 20, 100, "right");
  wall5 = new Wall(250, 400, 400, 20, "down");
  wall6 = new Wall(650, 0, 20, 420, "right");


}

p.draw = function() {
  p.background(220);

  p.fill('red');
  wall1.draw();
  wall2.draw();
  wall3.draw();
  wall4.draw();
  wall5.draw();
  wall6.draw();

//   var wall1 = {
//   xCoordinate: 50,
//   yCoordinate: 200,
//   wallWidth: 400,
//   wallHeight: 20

// };


  //p.rect(50, 200, 20, 400);

  //p.rect(50, 200, 400, 20);
  //p.rect(450, 0, 20, 220);

  //p.rect(250, 400, 20, 100);
  //p.rect(250, 400, 400, 20);
  //p.rect(650, 0, 20, 420);

  p.strokeWeight(0);
  p.fill('red');
  p.ellipse(playerX, playerY, diameter);

  p.image(flags, flagsX, flagsY, 100, 75);
  p.noFill();
  p.rect(flagsX, flagsY, 100, 75);

  flagsCollision(flagsX, flagsY, playerX, playerY);
  wall1.handleCollision();
  wall2.handleCollision();
  wall3.handleCollision();
  wall4.handleCollision();
  wall5.handleCollision();
  wall6.handleCollision();

  keyPressed(); //it's okay, it still works. dw

  if (win) {
    //console.log("DISPLAY");
    p.ellipse(200,200,200);
    //displayWin();
  }
}
