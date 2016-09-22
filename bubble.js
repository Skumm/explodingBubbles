function Bubble(){
  //Hacemos que aparezca en una posicion aleatoria
  this.position = createVector(random(width), random(height));
  this.radius = 80;
  //generamos un color aleatorio
  this.colorBubble = color(random(100,255),0,random(100,255));

  //Controlamos la explosion
  this.clicked = function(x, y){
    var distance = dist(this.position.x, this.position.y, x, y);

    if (distance < this.radius) {
      return true;
    }else{
      return false;
    }
  }

  //Controlamos el movimiento de nuestra burbuja
  this.move = function(){
    var vel = p5.Vector.random2D();
    this.position.add(vel);
  }
  //Creamos y coloreamos nuestra burbuja
  this.show = function(){
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
    fill(this.colorBubble);
  }
}
