
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    background(225);
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}   


function drawThing(x, y) {
    noStroke();
  
    // Body
    fill(255);
    ellipse(x, y + 20, 40, 30);
  
    // Head
    ellipse(x, y, 30, 30);
  
    // Ears
    ellipse(x - 10, y - 10, 10, 10);
    ellipse(x + 10, y - 10, 10, 10);
  
    // Inner ears
    fill(220);
    ellipse(x - 10, y - 10, 5, 5);
    ellipse(x + 10, y - 10, 5, 5);
  
    // Eyes
    fill(0);
    ellipse(x - 5, y - 3, 3, 3);
    ellipse(x + 5, y - 3, 3, 3);
  
    // Nose
    fill(50);
    ellipse(x, y + 3, 4, 3);
  }
  