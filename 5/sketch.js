var img1;
var img2;
var txtSize = 10;
var speed = 1;
const MIN_SIZE = 10;
let word = "rabbit";
let position = [0, 0];
let colorLib = [];
let currIndex = 0;
let currentColor;
function setup() {
  txtSize = MIN_SIZE;
  img1 = loadImage("Untitled-1.png");
  img2 = loadImage("screen2.png");
  createCanvas(windowWidth, windowHeight);
  colorLib.push(color(255, 255, 0));
  colorLib.push(color(255, 0, 0));
  colorLib.push (color(0, 255, 255));
  colorLib.push(color(0, 255, 0));
  colorLib.push(color(0, 0, 255));
  colorLib.push(color(255, 0, 255));
  colorLib.push(255);
  
  currentColor = colorLib[5];
}

function draw() {
  image(img1, 0, 0);
  fill(255);
  textSize(txtSize);
  fill(currentColor);
  text(word, mouseX-(txtSize), mouseY)
  image(img2, 0, 0);
  
}
function mouseClicked(){
  if (currIndex + 1 > colorLib.length - 1){
    currIndex = 0;
  }
  else{
    ++currIndex
    currentColor = colorLib[currIndex];
  }
}

function mouseWheel(event){
  txtSize += (event.delta + speed)*-1;
  if (txtSize < MIN_SIZE){
    txtSize = MIN_SIZE;
  }
  
}