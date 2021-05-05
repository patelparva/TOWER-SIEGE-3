const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2,ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,slingShot;

var score=0;

function preload() {

}

function setup() {
	createCanvas(1500, 500);

    engine = Engine.create();
	world = engine.world;

    ground=new Ground(width/2,505,width,10)
    stand1=new Ground(575,450,250,20);
    stand2=new Ground(1050,300,180,20);
    block1=new Box(480,410,30,40,"blue");
    block2=new Box(510,410,30,40,"blue");
    block3=new Box(540,410,30,40,"blue");
    block4=new Box(570,410,30,40,"blue");
    block5=new Box(600,410,30,40,"blue");
    block6=new Box(630,410,30,40,"blue");
    block7=new Box(660,410,30,40,"blue");
    block8=new Box(510,370,30,40,"pink");
    block9=new Box(540,370,30,40,"pink");
    block10=new Box(570,370,30,40,"pink");
    block11=new Box(600,370,30,40,"pink");
    block12=new Box(630,370,30,40,"pink");
    block13=new Box(540,330,30,40,"green");
    block14=new Box(570,330,30,40,"green");
    block15=new Box(600,330,30,40,"green");
    block16=new Box(570,290,30,40,"black");
    block17=new Box(980,295,30,40,"blue");
    block18=new Box(1015,295,30,40,"blue");
    block19=new Box(1045,295,30,40,"blue");
    block20=new Box(1075,295,30,40,"blue");
    block21=new Box(1105,295,30,40,"blue");
    block22=new Box(1015,215,30,40,"green");
    block23=new Box(1045,215,30,40,"green");
    block24=new Box(1075,215,30,40,"green");
    block25=new Box(1045,175,30,40,"pink");

    polygon=new Polygon();
    
    slingShot=new SlingShot(polygon.body,{x:150,y:200});
}

function draw() {
    // background(56,44,44);

    clear();

    bg();

    Engine.update(engine);

    textSize(20);
    text("Score: "+score,750,40);
    
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    slingShot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      slingShot.attach(polygon.body);
    }
}

async function bg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    var hour = 20

    if(hour>=06 && hour<=19){
        background(56,44,44)        
    }
    else{
        background(0);    
    }
}
