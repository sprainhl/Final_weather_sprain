function temp(tempMain) {

var tempMap = map(tempMain,0,90,-15,-125);
//my range for temperature this is coming from the JSON file
var tempMapred = map(tempMain,0,90,0,255);
//red color
var tempMapblue = map(tempMain,0,90,255,0);
//blue color


  for (var i = 0; i < 1; i++) {
    
      randomSeed(i * 300);
      // c = noise
      var speed = .4;
      var correlation = .01;
      var time = (frameCount * speed) + (i*correlation);
      var side = map(noise(time),0,1,-15,15);
      //x axis
      time = time + 100;
      push();
      rotate(0);
      translate(-545,0);
      translate(side,tempMap);
      //side is the noise applied to the triangle, and tempMap is the location of the triangle according to the JSON
      fill(0);
      triangle(40, 50, 58, 40, 58, 60);
      pop();
      
      push();
      rotate(0);
      translate(-525, 0);
      fill(tempMapred, 50, tempMapblue);
      rect(0, 0, 20, 150);
      //size for rectangle
      pop();
    
  }
}