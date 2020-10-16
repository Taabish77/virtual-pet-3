var dog, happyDog,foodObj;
var gamestate =0;
var Playing=1;
var hungry=2;
var database;
var foodS, foodStock;
var fedTime, lastFed, washroom, bedroom;
var readState;
var foodStock= 24;
function preload()
{
dog = loadImage("Dog.png");
happyDog = loadImage("happyDog.png");
 washroom= loadImage("Wash Room.png");
bedroom= loadImage("Bed Room.png");
}

function setup() {
  
  database = firebase.database();
  console.log(database);
  createCanvas(800, 700);
  dog = createSprite(400,300);
foodObj= new Food();
readState=database.ref('gamestate')
readState.on("val",function(data)){
gamesstate=data.val();
}
}


function draw() {  
  background("green")
if(keywentDown(DOWN_ARROW)){
 writeStock(foodS);
dog.addImage(happyDog);
}
else if(keyDown(UP_ARROW)){
  addFood();
  hour();
}
  drawSprites();
  text("Food Stock"+foodS,width-300,50);
  noStroke();
  textSize(35);
  fill("white")

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){

database.ref('/').update({
Food:x
})
}
bedroom(){
  background(bedroom,550,550);
}
garden(){
  background(garden,550,550);
}
bath(){
  background(washroom,550,550);
}

function addFood(){
  foodS+1;
  }
  function hour(){
    foodS=data.val();
    }
currentTime=hour();
if(currentTime==lastFed+1){
  update("Playing")
  foodObj.Garden
}else if(currentTime==lastFed+2){
  foodObj.washroom();
}else{
  update("hungry")
  foodObj.display;
}