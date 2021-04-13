var dog,dogImg,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,300,50,50);
  
}


function draw() {

  background(207,10,233)

  dog.addImage(dogImg);
  dog.scale = 0.2;

  

  drawSprites();
  
}










