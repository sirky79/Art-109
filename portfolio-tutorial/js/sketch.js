
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


function drawThing(x, y){
    //draw eyeballs
    fill(255);
    ellipse(x, y, 30, 30);
    ellipse(x - 20, y + 5, 30, 30);

    //draw pupils
    fill(0);
    ellipse(x + 10, y, 5, 5);
    ellipse(x - 10, y + 5, 5, 5);
}