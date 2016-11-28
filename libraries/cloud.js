function cloud(cloudCover){
  
  //text(cloudCover,width/2,height/2);
  
  translate(width/2,height/2);
  for(var i = 0;i < 100;i++){
    //connects the cloud cover probability to the actual value
    if(random(100) < cloudCover){
    //randomSeed stabilized random numbers
    randomSeed(i*300);
    var speed = .1;
    push();
    fill(110,random(110));
    stroke(.5);
    rotate(radians(frameCount * speed)+ TWO_PI * i/100);
    //radians(frameCount is making the circle rotate and + TWO_PI draws the circle  * i/100 is the amount of circles according to the weather data variable i
    ellipse(200,0,50,50);
    //the first value 200 controls how far from the center the cirlces are drawn
    pop();
    }
  }
} 