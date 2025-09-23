
var txt = "text";
var font;
var fontFile;
var backgroundColor;
var mTexts = [];
var fTexts = [];
let offset = 5;
let script = "a play is described where the first half is an excess of vulgar images (murder, incest, mutilation, poisoning, etc.), but in the second half there is a \"reluctance\" things begin happening off screen and none of the characters are willing to talk about it. like the theater company is aware of the message but the audience is in the dark. thing is, the play is from the 17th century, and so while the audience of the time would've known what's being alluded to, a modern audience (and modern theater) doesn't. communication that's been destroyed by history, by what was left to implication because it was unspeakable and thus came to be half of a message, the original intent destroyed. It is at about this point in the play, in fact, that things really get peculiar, and a gentle chill, an ambiguity, begins to creep in among the words. Heretofore the naming of names has gone on either literally or as metaphor. But now, as the Duke gives his fatal command, a new mode of expression takes over. It can only be called a kind of ritual reluctance. Certain things, itis made clear, will not be spoken aloud; certain events will not be shown onstage; though it is difficult to imagine, given the excesses of the preceding acts, what these things could possibly be. But Gennaro ends on a note most desperate, probably for its original audience a real shock, because it names at last the name Angelo did not and Niccolò tried to: He that we last as Thurn and Taxis knew Now recks no lord but the stiletto’s Thorn,And Tacit lies the gold once-knotted horn. No hallowed skein of stars can ward, I trow, Who’s once been set his tryst with Trystero. Trystero. The word hung in the air as the act ended and all lights were for a moment cut; hung in the dark to puzzle Oedipa Maas, but not yet to exert the power over her it was to. Perhaps the Thurn and Taxis mail system. Stamp collectors tell me it did exist. Perhaps the other, also. The Adversary. But they would be traces, fossils. Dead, mineral, without value or potential. reality, facts, what you make of them. the postal system existed. communication doesn't exist. only exists between people, hangs in the air, disppears. You could waste your life that way and never touch the truth. Wharfinger supplied words and a yarn. I gave them life. That’s it.";
let words;
let wordcount = 0;

function setup() {
 backgroundColor = color(255, 255, 255);
 createCanvas(windowWidth, windowHeight);
  words = script.split(" ");
}

function draw() {
  //background(backgroundColor);
  
  if (mTexts.length > 0){
  for (let x = 0; x < mTexts.length; ++x){
    fill(mTexts[x][3]);
    text(mTexts[x][0], mTexts[x][1],mTexts[x][2]);
    mTexts[x][2] += 1;
   // print(blue(mTexts[x][3]))
    if (blue(mTexts[x][3]) > 0){
     mTexts[x][3].setBlue(blue(mTexts[x][3]) - 1); 
     mTexts[x][3].setRed(red(mTexts[x][3]) - 1); 
     mTexts[x][3].setGreen(green(mTexts[x][3]) - 1); 
    }
    if (mTexts[x][2] > (windowHeight - offset)){
      fTexts.push(mTexts[x]);
      mTexts.splice(x, 1);
     // print(mTexts);
    }
    
  }
    
    for (let y = 0; y < fTexts.length; ++y){
      fill(255)
      text(fTexts[y][0], fTexts[y][1], fTexts[y][2]-y);
    }
  }
  
}

function mousePressed(){
  if (wordcount < words.length){
    wordcount++;
  }
  else{
    wordcount = 0;
  }
  mTexts.push([words[wordcount], mouseX, mouseY, color(255)]);
}

function mouseClicked(){
  
}


function mouseReleased(){
  
}