let txt2 = "n its coercive universalization, however, the image of the Child, not to be confused with the lived experiences of any historical children, serves to regulate political discourse—to prescribe what will count as political discourse—by compelling such discourse to accede in advance to the reality of a collective future whose figurative status we are never permitted to acknowledge or address. From Delacroix’s iconic image of Liberty leading us into a brave new world of revolutionary possibility—her bare breast making each spectator the unweaned Child to whom it’s held out while the boy to her left, reproducing her posture, affirms the absolute logic of reproduction itself—to the revolutionary waif in the logo that miniaturizes the ‘‘politics’’ of Les Mis (summed up in its anthem to futurism, the ‘‘inspirational’’ ‘‘One Day More’’), we are no more able to conceive of a politics without a fantasy of the future than we are able to conceive of a future without the figure of the Child. That figural Child alone embodies the citizen as an ideal, entitled to claim full rights to its future share in the nation’s good, though always at the cost of limiting the rights ‘‘real’’ citizens are allowed. For the social order exists to pre- serve for this universalized subject, this fantasmatic Child, a notional freedom more highly valued than the actuality of freedom itself, which might, after all, put at risk the Child to whom such a freedom falls due. Hence, whatever refuses this mandate by which our political institutions compel the collective reproduction of the Child must appear as a threat not only to the organization of a given social order but also, and far more ominously, to social order as such, insofar as it threatens the logic of futurism on which meaning always depends."
let words = [];
let pos = 0;
let delay = 1;
let speed = 5;
const MAX_SPEED = 20;
let timer = 0;
let position = [0, 0];
let dirX = 1;
let dirY = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = txt2.split(" ");
}

function draw() {
  fill(0);
  if (timer < delay){
    ++timer;
  }
  else{
    timer = 0;
    //print text
    if(pos > words.length){
      pos = 0;
    }
    else{++pos}
    if (words[pos]){
    text(words[pos], position[0], position[1]);
    }
    
    
    position[0] += speed*dirX;
    position[1] += speed*dirY;
    if ((position[0] + 1*dirX > windowWidth) || (position[0] + 1*dirX < 0)){
      dirX = dirX*-1;
    } 
    if ((position[1] + 1*dirY > windowHeight) || (position[1] + 1*dirY < 0)){
      dirY = dirY*-1;
    } 
  }
  fill(255)
  rect(16, windowHeight-40, 70, 30);
  fill(color(255, 0, 0));
  text("SPEED: "+ speed, 20,  windowHeight - 20);
  //background(220);
}

function mouseClicked(){
  if (speed + 1 > MAX_SPEED){
    speed = 1;
  }
  else { ++speed;}
}