class Polygon {
    constructor() {
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50,200,20,options);
        World.add(world,this.body);
        this.image=loadImage("polygon.png")
    }
    
    display() {
        var pos=this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        pop();
    }
}