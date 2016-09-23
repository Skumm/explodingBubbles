function Bubble(pos, rad, col){
  //Hacemos que aparezca en una posicion aleatoria
  if (pos) {
    this.position = pos.copy();
  }else{
    this.position = createVector(random(width), random(height));   
  }
  
  this.radius = rad || 80;
  //generamos un color aleatorio
  this.colorBubble = col || color(random(100,255),0,random(100,255));

  //Controlamos la explosion
  this.clicked = function(x, y){
    var distance = dist(this.position.x, this.position.y, x, y);

    if (distance < this.radius) {
      return true;
    }else{
      return false;
    }
  }

  //funcion para la duplicación de las burbujas
  this.explosion =function(){
      var bubble1 = new Bubble(this.position, this.radius/2,
       this.colorBubble);
      return bubble1; 
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
