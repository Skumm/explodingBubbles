//nuestra burbuja
var bubbles = [];

//iniciamos el canvas
function setup(){
  createCanvas(600, 600);
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

function mousePressed(){
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clicked(mouseX, mouseY)) {
      console.log("has dado a la burbuja")
    }
  }
}
