

var posY = 0;
var speedY = 1;


function rain(rainShower){
  var rainMap = map(rainShower,0,60,0,100);
  var heavyRain = map(rainShower,60,0,60,0);
  var lightRain = map(rainShower,0,60,0,60);
  
  for(var i = 0;i < 100;i++){
    //connects the rain shower probability to the actual value
    if(random(100) < rainMap){
    //randomSeed stabilized random numbers
    
    posY += speedY;
    //runs the rain movement
    //posY draws the circle on the y axis
    if(posY > height){
      posY = 0;
      } 
    randomSeed(i*100);

    //always use translate and rotate for push and pop
    push();
    
    translate(posY*i/100,posY*i/100);
    rotate(0);
    //blue for rain
    fill(0,0,255);
    
    ellipse(random(height),random(width),lightRain);
    ellipse(random(height),random(width),heavyRain);
    pop();
    }
  }
} 