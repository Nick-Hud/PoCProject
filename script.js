let player1
const floorHeight = 50
let frameCount = 0

function setup() {
  frameRate(60);
  player1 = new player()
  createCanvas(windowWidth - 20, windowHeight - 100, WEBGL);
  rectMode(CENTER)
  angleMode(DEGREES)
  frameCount = 0
}

function draw() {
  background(60);
  camera(0, -50, 150, 0, 0, 0);
  stroke(255);
  //draw player
  push()
  fill(0)
  translate(player1.getPosition(false));
  box(20);
  pop()
  playerInput()
  scene()
  gravity()
  frameCount++
}

function scene() {
  //bottom tiles
  let xArr = [3]
  xArr = [-40, 0, 40]
  let zArr = [3]
  zArr = [-40, 0, 40]
  let yVal = floorHeight
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      push()
      translate(xArr[j], yVal, zArr[i])
      fill(150)
      box(30, 3, 30)
      pop()
    }
  }
  //back panel
  push()
  fill(255, 102, 94);
  translate(0, 0, -60)
  plane(120, 120);
  pop()
  //left panel
  push()
  fill(255, 102, 94);
  translate(-60, 0, 0)
  rotateY(90)
  plane(120, 120);
  pop()
  //right panel
  push()
  fill(255, 102, 94);
  translate(60, 0, 0)
  rotateY(90)
  plane(120, 120);
  pop()
  //bottom panel
  push()
  fill(255, 102, 94);
  translate(0, 60, 0)
  rotateX(90)
  plane(120, 120);
  pop()
}


function keyPressed() {
  let keypressed = key;
  if (keypressed == "#") {
    player1.set(0, 0, 0)
  }
  if (keypressed == " ") {
    player1.jump()
  }
  return false;
}
