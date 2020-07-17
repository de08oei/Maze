function draw() {
  if (playerX <= 0) {
    playerX = 0;
  }
  if (playerX >= p.width) {
    playerX = p.width;
  }
  if (playerY <= 0) {
    playerY = 0;
  }
  if (playerY >= p.height) {
    playerY = p.height;
  }
  p.background(220);
}

let win = false;
let canMoveLeft = true;
let playerVelocity = 2;

function flagsCollision(fx, fy, ex, ey) {
  if (p.collideRectCircle(fx, fy, 100, 75, ex, ey, 30)) {
    console.log('flags collided');
    win = true;
    //alert("HEY");
    // p.rect(400, 250, 200, 100);
  }
}

function displayWin() {
  p.rect(200, 200, 200, 200);
}

function keyPressed() {
  if (p.keyIsDown(p.LEFT_ARROW)) {
    playerX -= playerVelocity;
  }
  else if (p.keyIsDown(p.RIGHT_ARROW)) {
    playerX += playerVelocity;
  }
  else if (p.keyIsDown(p.UP_ARROW)) {
    playerY -= playerVelocity;
  }
  else if (p.keyIsDown(p.DOWN_ARROW)) {
    playerY += playerVelocity;
  }
  return false; // prevent default

}

class Wall {

  constructor(x, y, wWidth, wHeight, orientation) {
    this.x = x;
    this.y = y;
    this.width = wWidth;
    this.height = wHeight;
    this.orientation = orientation;
  }

  draw() {
    //console.log("LOL")
    p.rect(this.x, this.y, this.width, this.height);
  }

  handleCollision() {
    if (p.collideRectCircle(this.x, this.y, this.width, this.height, playerX, playerY, 30)) {
      console.log("Colliding")
      if (this.orientation == "left") {
        playerX += playerVelocity;
      } else if (this.orientation == "right") {
        playerX -= playerVelocity;
      } else if (this.orientation == "up") {
        playerY += playerVelocity;
      } else if (this.orientation == "down") {
        playerY -= playerVelocity;
      }

    }

  }
}
