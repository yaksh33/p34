var dogImg, dogImg1, dog
var foodStock, foodS, writeStock
var database

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database()
  dog = createSprite(250,250,70,70)
  dog.addImage(dogImg)
  dog.scale = 0.2
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
  
}


function draw() {  
background("GREEN")

if(keyWentDown(UP_ARROW)){

  writeStock(foodS);
  dog.addImage(dogImg1);

}
fill("BLACK")
textSize(30)
text("Press up arrow to feed the dog",10,40)

textAlign(CENTER)
text("Food remaining:"+foodS,250,450);


  drawSprites();


  //add styles here

}

function readStock(data){

  foodS = data.val()

}

function writeStock(x){

  if(x<=0){
    x = 0;
  } else{
    x = x-1
  }

  database.ref('/').update({
    Food:x
  })

}