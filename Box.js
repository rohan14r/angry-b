class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.Image=loadImage("sprites/wood1.png")
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.Image,0, 0, this.width, this.height);
    pop();
  }
};
