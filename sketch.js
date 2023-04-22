let Xc;
let Yc;
let num = 0;

const VERTICES = 5;
const SCALE = 1.618; //(5,1.618 GR), (8,2.414), 2 is generally good

let angle = Math.PI*2/VERTICES;
let xArr = [];
let yArr = [];

function preload() {
  console.log("2")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Xc = width/2;
  // Yc = height/2;
  background(255);
}

function draw() {
  num = 0;
  background(255);
  translate(width/2, height/2);
  drawFractal(150,150);
}

function drawFractal(startX, startY){
  num+=0.002;
  let c = color(255-num, 0, num, 120);
  fill(c);
  if(dist(0, 0, startX, startY)<2){
    strokeWeight(2);
    stroke(c);
    point(0,0);
  }else{
    for (let i = 0; i < VERTICES; i++) {
      push();
      rotate(i*angle);
      translate(startX/2, startY/2);
      drawFractal(startX/2, startY/2);
      pop();
    }
  }
}

function mousePressed(){
}

function mouseReleased(){
}

function mouseDragged(){

}
