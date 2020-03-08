i=200
sco= 0
hd=150
x=0
h=200
vel=0
g=.5
var sd
j =200
function setup() {
  sd= loadSound('bgm.mp3')
  createCanvas(400, 400);
bird=loadImage('bird.png')
  bg=loadImage('bg.JPG')
}
function mousePressed(){
vel=-10

}
function draw() {
  sd.play
  background(220,j,x);
  image(bg,0,0,400,400)
image(bird,i,j,30,30)
vel+=g
  j+=vel
 rect(x,h,20,h)
  hd=h-100
  rect(x,0,20,hd)
if(x>400)
  {x=0
   h=random(200,300)
  
  }
  if(j>380)
    {
    g=0
      vel=0
    }
  else if(j<400)
    {
    g=.5
   }
  x+=3
  
  if(i>x&&i<x+20&&(j>h ||j<h-100))
  { sd.stop
  exit();
   }
  if(i>x&&i<x+3)
    {
     sco+=1
     }
  text('score-'+sco,10,10)
}
