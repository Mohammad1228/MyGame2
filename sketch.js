var weapon;
var weaponImg;


var bulletG;
var EnemyG;
var EnemyImg;


function preload(){
  weaponImg=loadImage("PaintballGun.png");
  EnemyImg=loadImage("download (1).png");


}

function setup() {
  createCanvas(1200,800);
  
 weapon = createSprite(100, 200, 100, 50);

 weapon.addImage("weaponIm",weaponImg);
 weapon.scale=0.5;

bulletG= new Group();
EnemyG= new Group();
}

function draw() {
  background(0,0,0);  

  weapon.y=mouseY;
   Enemy();
    bulletSpawn();

for(var i = 0;i<bulletG.maxDepth();i++){
B=bulletG.get(i);
for(var j = 0;j<EnemyG.maxDepth();j++){
E=EnemyG.get(j);
if(E!=null&&B!=null&&E.isTouching(B)){
  EnemyG.remove(E);
  bulletG.remove(B);
  
  E.destroy();
  B.destroy();
}
}


}

  drawSprites();
}

function Enemy(){
if(frameCount %25===0){
  enemy=createSprite(random(200,1100),0,20,20);
  enemy.addImage("EnemyIm", EnemyImg);
  enemy.scale=0.2;
  enemy.velocityY=3;
  enemy.lifetime= 800/3;
  EnemyG.add(enemy);
  
}
}
function bulletSpawn(){
if(keyWentDown("space")){
bullet=createSprite(100,mouseY,10,10);
bullet.velocityX=5;
bullet.lifetime=1200/5;
bulletG.add(bullet);
}


}