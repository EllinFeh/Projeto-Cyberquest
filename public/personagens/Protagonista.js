export class Protagonista{
constructor(img, hp, id){
    this.id = "Adam";
    this.srcX = this.srcY = 0;
    this.width = 64;
    this.height = 64;
    this.posX = 2220;
    this.posY = -100;
    this.img = img; 
    this.hp = 250;
    this.hp = hp;
    this.id = id;
    this.Ataque = 25;
    this.Defesa = 10;
    this.srcXC = 64;
    this.srcYC = 64;
    }
    
}

var imgAdam = new Image();
imgAdam.src = "./images/adam.gif";
export var Jogador = new Protagonista ("Adam",imgAdam,100);