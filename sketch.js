//nuestra burbuja
var bubbles = [];

//iniciamos el canvas
function setup(){
  createCanvas(1900, 900);
  bubbles.push(new Bubble());
}
//Dibujamos la burbuja
function draw(){
  background(255, 255, 125);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

//Cuando pulsamos sobre una burbuja, esta se divide en 2
function mousePressed(){
  for (var i = bubbles.length -1; i >= 0; i--) {
    if (bubbles[i].clicked(mouseX, mouseY)) {

      bubbles.push(bubbles[i].explosion());
      bubbles.push(bubbles[i].explosion());

      bubbles.splice(i, 1);
    }
  }
}
