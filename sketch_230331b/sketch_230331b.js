// Rita Lilla Kovacs
// Pascal Huynh
// Web and FX: From Theory to Practice, 502-A22, sect.01
// It will be okay
// https://openprocessing.org/sketch/1884933

/* Instructions

Click on mouse to change slides.
Move mouse around to see movement of objects.
On slide 3, hold anywhere on the keyboard to see text appear.


Artist statement

This experience allows its users to be heard. It aims to remind individuals to develop a positive mindset 
and that everything will turn out okay.This experience can therefore help the users feel more supported, 
less alone, and more validated. Overall, feeling heard promotes positive mental health outcomes as individuals
feel understood. 

*/

let a;
let b;
let showText = false;
let textX, textY;
const sentences = [

  "A negative mind will never give you a positive life!",
  "Be patient!",
  "Mindset is everything!",
  "You are somebody's reason to smile!",
  "You are enough!",
  "Switch your mentality!",
  "Stay positive!",
  "Love yourself first!",
  "Give yourself some credit!",
  "Don't quit!",
  "Make yourself a priority!",
  "Create opportunities!",
  "Learn to rest, not quit!",
  "You are stronger than you think!",
  "Winners never quit!",
  "Dream big!",
  "Inspire others!",
  "Be unstoppable!",
  "Grow and learn!",
  "Stay true to yourself!",
  "Be bold!",
  "Spread love!",
  "Rise above!",
  "Dream, Believe, Achieve!",  
];

function setup() {
   createCanvas(1000, 1000);
   a = 0;
   b = 0;
   }

function draw() {
  
//Create first slide
if (a === 0) {
    background(255, 22, 10);
    textAlign(CENTER);
    fill(255);
    textSize(35);
    textFont("Arial");
    strokeWeight(6);
    stroke(0);
    text("press anywhere on the screen to change slides", mouseX, mouseY);
    }

//Create second slide
  
if (a === 1) {
    background(255, 67, 10);
    fill(200);
    circle(500, 500, 500);
    strokeWeight(6);
    arc(500, 600, 120, 90, PI, PI + HALF_PI);
    stroke (0);
    fill (255);
    textSize(50);
    text("Sometimes, it happens that we feel down...", 500,100);
  
    textSize (20);
    text("(move mouse around)", 500,900);
    
//Blink if mouse in region
  
if (mouseX > 300 && mouseX < 700) {
    fill(0);
    } else {
    fill(200);
    }

    arc(405, 420, 90, 90, 0, PI);
    arc(595, 420, 90, 90, 0, PI);
    }
  
//Create third slide
  
if (a === 2) {
    background(255, 115, 10);
    strokeWeight(6);
    stroke(0);
    textSize(50);
    fill(255);
    text("but remember, the only person responsible", 500, 100);
    text(" for your happinness is you!", 500, 180);
  
    textSize(20);
    text ("(change slides when ready)", 500, 900);
  
    textAlign(CENTER);
    fill(255);
    strokeWeight(6);
    stroke(6);
    textSize(35);
    textFont("Arial");
    text("hold a letter on the keyboard and repeat to see more", mouseX, mouseY);
    
  }

// Display the text if showText is true
  
if (showText && a === 2) {
    textSize(35);
    fill(0);
    strokeWeight (1);
    text(currentSentence, textX, textY);
    }

//Create fourth slide
  
if (a===3) {
    background (255, 213, 115);
    
    fill(255, 188, 10);
    circle(500,500,500);
  
    fill(70);
    circle(405,420,120);
    circle(595,420,120);
    
    fill(0);
    circle(405,440,80);
    circle(595,440,80);
      
    fill(255);
    circle(390,450,25);
    circle(580,450,25);
  
    strokeWeight(6);
    textSize(50);
    fill(255);
  
    text(" And if you manage to develop a positive",500 ,100);
    text ("mindset, life isn't so unbearable afterall.", 500, 180);
  
    textSize(20)
    text ("(move mouse around)", 500, 900);
    

//smile if mouse in region
  
if (mouseX > 300 && mouseX < 700) {
    arc(500,600,150, 120, 0, PI,);
    fill (255, 188, 10);
    } else {
    arc(500,600,150, 120, 0, PI,CHORD);
    fill(255);
    }
  
    stroke(0);
    arc(500,600,150, 120, 0, PI,);
   
    }
  
    }

function keyPressed() {

    showText = true;

    textSize(32); // Set the text size before calculating the position

     currentSentence = random(sentences); // Select a random sentence first
    let textWidthValue = textWidth(currentSentence);
    let textHeightValue = 32; // Use the text size as an estimate for the height

// Adjust the random position to keep the text within the canvas
  
    textX = random(textWidthValue / 2, width - textWidthValue / 2);
    textY = random(textHeightValue, height - textHeightValue);
    
    }

function keyReleased() {
     showText = false; // Set showText to false when the key is released
  }

function mousePressed() {
    a++;
    if (a === 4) {
    a = 0;
     }
    }
