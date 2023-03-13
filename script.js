let playerBox
function setup() {
  frameRate(60);
  playerBox = createVector(0, 0, 0)
  createCanvas(windowWidth - 20, windowHeight - 100, WEBGL);
  rectMode(CENTER)
}

function draw() {
  background(60);
  //camera(0, -40, 75, 0, 0, 0);
  camera(0, -50, 150, 0, 0, 0);
  stroke(255);
  fill(255, 102, 94);
  //box(85);
  push()
  fill(0)
  translate(playerBox);
  box(20);
  pop()
  playerInput()
  scene()

}

function scene(){
  let xArr = [3]
  xArr = [-40, 0, 40]
  let zArr = [3]
  zArr = [-40, 0, 40]
  let yVal = 50
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      push()
      noStroke()
      translate(xArr[j],yVal,zArr[i])
      fill(150)
      box(30, 3, 30)
      pop()
    }
  }
}

function playerInput(){
  if (keyIsDown(87)) {
    //console.log("Back")
    playerBox.sub(0, 0, 1)
  }
  if (keyIsDown(83)) {
    //console.log("Forward")
    playerBox.add(0, 0, 1)
  }
  if (keyIsDown(37)) {
    //console.log("Left")
    playerBox.sub(1, 0, 0)
  }
  if (keyIsDown(38)) {
    //console.log("Up")
    playerBox.sub(0, 1, 0)
  }
  if (keyIsDown(39)) {
    //console.log("Right")
    playerBox.add(1, 0, 0)
  }
  if (keyIsDown(40)) {
    //console.log("Down")
    playerBox.add(0, 1, 0)
  }
}


function keyPressed() {
  let keypressed = key;
  if (keypressed == " ") {
    playerBox.set(0, 0, 0)
  }
  return false;
}
