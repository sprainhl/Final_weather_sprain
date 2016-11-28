var weatherData;
var mapImage;
var myFont;
var centerX;
var centerY;
//selects the location of the circle
var selectionX;
var selectionY;
var mapLocationX = 0;
var mapLocationY = 0;
var mapSizeX = 1080;
var mapSizeY = 720;


function preload(){
  myFont = loadFont("GeosansLight.ttf");
  mapImage = loadImage("map_equi_1.png");
}

function setup() {
  createCanvas(1080,720);
  angleMode(CENTER);
  rectMode(CENTER);
  textFont(myFont);
  textSize(24);
  textAlign(CENTER);
  fill('red');
  
  centerX = width/2;
  centerY = height/2;
  
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial", gotData);
  
}

function gotData(data){
  //this callback function executes once the json has arrived
  //takes the json in the data argument and dumps it in the weatherData variable
  weatherData = data;
}

function draw() {
  background(255);

  tint(200,30);
  image(mapImage,mapLocationX,mapLocationY,mapSizeX,mapSizeY);
  //mapImage = (mapLocationX,mapSizeX,mapLocationY,mapSizeY);
  textSize(25);
  push();
  translate(910,0);
  rotate(0);
  
  fill(0);
  text(" Current Weather Data",50,50);
  pop();
  
  fill('red');
  //draws the circle when mouse pressed and stays on selected area
  ellipse(selectionX,selectionY,10,10);
  
    
  //if the mouse is over the map
  if(mouseX > mapLocationX &&
    mouseX < (mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
    //draw the crosshair lines
    stroke(0);
    line(mouseX,mapLocationY,mouseX,mapLocationY + mapSizeY);
    line(mapLocationX,mouseY,mapLocationX + mapSizeX,mouseY);
    noStroke();
    fill(0);
    //draw the lat and long coordinates
    text(floor(map(mouseY,mapLocationY,mapLocationY + mapSizeY,90,-90)),mapSizeX- 20,mouseY - 4);
    text(floor(map(mouseX,mapLocationX,mapLocationX + mapSizeX,-180,180)),mouseX - 20,mapLocationY + 20);
    
    }
  
    
  
  //if weatherData is undefined, then this code will not execute undefined = FALSE anything
  if(weatherData){
    fill(0);
    //weather type
    text(weatherData.weather[0].main,150,550);
    textSize(20);
    
    //City Name
    text(weatherData.name,150,490);
    //Country Name
    text(weatherData.sys.country,150,510);
    
    
    
    //Latitude
    text(weatherData.coord.lat,150,450);
    //Longitude
    text(weatherData.coord.lon,150,470);
  
    //rain text
    text(weatherData.main.temp + " °F",35,270);
  
  //the conditional for rain
  if (weatherData.rain){
    rain(weatherData.rain["3h"]);
    
  }
  
  
  //clouds text and function
    text(weatherData.clouds.all,150,530);
    cloud(weatherData.clouds.all);
    //temperature
    //the function for temp is last to indicate order of the code run
    temp(weatherData.main.temp);
    
 }
}

function mousePressed(){
  if(mouseX > mapLocationX &&
    mouseX <(mapLocationX + mapSizeX) &&
    mouseY > mapLocationY &&
    mouseY < (mapLocationY + mapSizeY)
    ){
      selectionX = mouseX;
      selectionY = mouseY;
      //grab the JSON based on the new selection
      var lon = map(selectionX,mapLocationX,mapLocationX + mapSizeX, -180,180);
      var lat = map(selectionY,mapLocationY,mapLocationY + mapSizeY, 90,-90);
      var start = "http://api.openweathermap.org/data/2.5/weather?lat="
      var end = "&appid=586c247ad8d56d6dce5eaa3184b383e1&units=imperial"
      var url = start + lat + "&lon=" + lon + end;
      loadJSON(url, gotData);
      //println(mousePressed);
    }
}

function keyTyped(){
  
  switch(key){
    case "1":
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=GreenBay,usa&appid=bb9517452d7954410f893673bdb238bd&units=imperial',gotData);
      break;
    case "2":
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Phoenix,usa&appid=bb9517452d7954410f893673bdb238bd&units=imperial',gotData);
      break;
    case "3":
      loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Seattle,usa&appid=bb9517452d7954410f893673bdb238bd&units=imperial',gotData);
      break;
  }
}
