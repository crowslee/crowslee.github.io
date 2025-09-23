let txt = "pg. 32 - 33: Anderson dismisses C.S Peirce's typology of symbols, indexes, and icons, since he finds them not sensitive to the characteristics of computer-based signs, namely that they can be handled and interacted with(199). Instead, he sets up his own classification system based on four features: permanence, transience, handling, and action. These are not independent of each other, however, transience is subordinordinate to permanence, and handling is subordinate to action...From these four features, Anderson extracts seven classes of signs: interactive, actor, object, button, controller, layout, ghost (32) Last, Anderson posits a very strange sign indeed; the ghost sign, which is without permanent and transient features, cannot be handled or even percieved but, nevertheless, exists by influencing the behavior of other non-ghost signs(211). The ghost sign is a clear indicator of a main weakness of his otherwise scrupulous semiology: in order to describe these phenomena as semiotic entities, he must invent a sign type that is without manifestation, a sign that seems to be pure content: in other words, not a sign at all. But what is it? (32)";

let words = [];
let colors = [];
let current = 0;
let currentColor = 0;
var c;

function setup() {
  createCanvas(600, 600);
  words = txt.split(" ");
  txt = words[0];
  c = color(0);
  
  colors = [
    color(255,0,0),
    color(0,255,0),
    color(0,0,255)
  ]
}

function draw() {
  background(220);
  stroke(0);
  fill(c);
  text(txt, windowWidth/2, windowHeight/2)
  
}

function mouseClicked(){
  ++current;
  if (current > words.length){current = 0;}
  txt = words[current]
  
}