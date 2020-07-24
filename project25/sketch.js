   const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   var ground;
   var  dustbinPart1, dustbinPart2,dustbinPart3;
   var world;
    
    
    function preload(){
    
    }
    
    function setup() {
        createCanvas(800, 500);
        rectMode(CENTER);

        engine = Engine.create();
        world = engine.world;

        ground = createSprite (400,190,800,10,{isStatic:true});
        ground.shapeColor=color(230,230,0);
    
        paper = new Paper(200,100,70);
        dustbin = new Dustbin(600,480);
        
    }
    
    
    function draw() {
      rectMode(CENTER);
      background(220);
    
    
      paper.display();
     dustbin.display();
    
      
      drawSprites();
     
    }
    
    
    
    