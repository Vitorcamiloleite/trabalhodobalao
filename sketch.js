var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var socore=0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1:redBalloon
    break;
    case 2:blueBalloon
    break;
    case 3:greenBalloon
    break;
    case 4:pinkBalloon
break;

  }}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //crieSprite para o balão 
    blue= createSprite()
    blue.addImage(blueImg)
    blue.sacle = 0.8
    blue.velocityY = 4
    blue.lefetime = 150
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}
function greenBalloon() {
  green= createSprite()
  green.addImage(greenImg)
  green.sacle = 0.8
  green.velocityY = 4
  green.lefetime = 150
  //crieSprite para o balão
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}
function pinkBalloon() {
  //crieSprite para o balão
  pink= createSprite()
  pink.addImage(pinkImg)
  pink.sacle = 7
  pink.velocityY = 4
  pink.lefetime = 150
  //adicioneImagem para o balão
  //adicione velocidade para fazer o balão se mover
  //mudar a dimensão do balão
  //atribua tempo de vida ao balão}
}