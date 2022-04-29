var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada;
var fadaSom

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadImage("images/fairyImage1.png");
    fadaSom = loadSound("sound/JoyMusic.mp3");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 600);

    //escrever código para tocar o som vozFada
    //fadaSom.play();
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130,480);
    fada.addImage(imgFada)
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);

    star.x=starBody.position.x
    star.y=starBody.position.y

    if(star.y>470){
        Matter.Body.setStatic(starBody,true)
    }

    
    if(keyDown("space")){
        Matter.Body.setStatic(starBody,false)
    }

    if(keyDown("a")){
        fada.x=fada.x+20
    }

    drawSprites();

}