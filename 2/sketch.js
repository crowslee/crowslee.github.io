var img;
let txt = "";
let txtX=0;
let txtY=0;
let rects = [];
let descriptions = [];
let size = 60;
function preload(){
    img = loadImage("refs-1.jpg")
    
}

function setup() {
 createCanvas(800, 800);
  rects = [  [500, 80],
             [80, 600],
             [460, 700],
             [300, 400],
             [280, 500],
             [180, 180]
            ];
 descriptions = [
   "it would be incredible if there was someone who actually watched from here. alas.",
    "beautiful patina, great place to crouch and hide from the horses, like in the ring",
   "like a diagonal twill. interesting choice. very solidly built, somewhat hidden. cuts an impressive shadow under the streetlight",
   "another great place to curl up. faced up to the window is a mirror which can be frightening when unexpected.",
  "a whole lot of gray at this cross section. you'd expect the place where four different angles align to have more going on.",
   "if only we were all tall enough to peek over gates...",
   "it would be incredible if there was someone who actually watched from here. alas.",
   "?????????"
 ];
}



function draw() {
  background(0);
  image(img, 0, 0);
  strokeWeight(5);
  stroke(255);
  fill(0, 0, 0, 0);
  for (let x = 0; x < rects.length; ++x){
    rect(rects[x][0], rects[x][1], size, size);
  }
  stroke(0);
  fill(255);
  text(txt, txtX, txtY);
}

function mouseClicked(){
  
  for (let x = 0; x < rects.length; ++x){
    if ((mouseX > rects[x][0]) && (mouseX < (rects[x][1] + size)) &&
       (mouseY > rects[x][1]) && (mouseY < rects[x][1] + size)){
      txt = descriptions[x];
      txtX = mouseX;
      txtY = mouseY;
      print(x);
      break;
    }
    else{
      txt = "";
    }
  }
}