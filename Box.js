class Box {
  constructor(x, y, width, height, block){
    
    this.Visiblity=255;
    if (block==="green") {
      this.b=loadImage("green-block.png");  
    }

    if (block==="blue") {
      this.b=loadImage("blue-block.png");  
    }
    
    if (block==="black") {
      this.b=loadImage("black-block.png");  
    }
    
    if (block==="pink") {
      this.b=loadImage("pink-block.png");
    }

    this.body=Bodies.rectangle(x,y,width,height);
    World.add(world,this.body);
  }

  display() {
    
    if(this.body.speed < 7){
      image(this.b,this.body.position.x,this.body.position.y-20)
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity)
      image(this.b,this.body.position.x,this.body.position.y)
      pop();
    }
  }

  score() {
    if (this.Visiblity<0 && this.Visiblity>105) {
      score++;
    }
  }
};
