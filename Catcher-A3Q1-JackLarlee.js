function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(1,1,76)");
  drawSPRITE()
  
   
}function drawSPRITE(x,y,size){

   //sword 
  fill("rgb(221,221,221)");
  rect(88,100,5,15)
  fill("grey")
  rect(75,115,25,50)
   fill("rgb(66,66,66)")
   rect(80,120,12,40);
  
  noStroke();
  //hair
  fill("black")
rect(94,100,20,15)
  rect(95,90,25,10)
  rect(93,110,10,7)
  rect(90,100,10,7) 
  rect(92,88,10,7)
  rect(115,87,7,7)
  rect(110,100,7,7)
  rect(106,87,7,7)
  //cape
  fill("rgb(76,54,28)")  
  rect(89,120,28,45)
  rect(87,150,28,10) 
  rect(85,155,28,10)
   rect(82,160,22,10)
rect(90,115,25,10)
  
  fill("tan")
  //neck
  rect(100,100,10,20)
  //head
  rect(100,100,15,13)
   rect(96,107,5,5)  
  //bangs
  fill("white")
  rect(115,100,5,5)
   rect(118,102,5,5)
   rect(105,100,5,5)
  rect(109,95,8,5)
 
  fill("tan")
  //armour
  //shoulders

  fill("rgb(60,60,60)")
  rect(91,120,28,10)
  //body
   rect(100,130,15,20)
   
  //left leg
   fill("rgb(60,60,60)")
   rect(97,140,7,10)
  rect(94,145,12,10)  
  rect(94,155,8,15)
//left foot
  rect(94,165,13,6)
  //right leg
  rect(106,140,7,10)
  rect(106,145,15,9)
   rect(114,150,7,10)
  //right foot 
  rect(114,155,13,6)
  //left arm R=>L
   rect(90,120,6,15)
   rect(87,130,6,10)
  fill("grey")
  rect(85,135,8,8)
  //right arm
  fill("rgb(60,60,60)")
 rect(118,120,13,8)
  rect(120,115,15,5)
  fill("tan")
rect(126,106,8,8)  
  //belts
  fill("rgb(99,59,25)")
  rect(100,130,8,5)
  rect(99,125,5,5)
  rect(100,130,8,5)
  rect(105,135,8,5)
  rect(99,120,5,5)
   rect(96,140,20,5)
}
