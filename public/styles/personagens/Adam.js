export class Adam{
constructor(id,hp,img){
    this.id = "Adam";
    this.srcX = this.srcY = 0;
    this.width = 64;
    this.height = 64;
    this.posX = 2220;
    this.posY = -100;
    this.img = img; 
    this.hp = 250;
    this.id = id;
    this.Ataque = 25;
    this.Defesa = 10;
    this.srcXC = 64;
    this.srcYC = 64;

    this.hp = hp;
    this.Ataque = 0;
    this.Defesa = 0;
    }

}

var imgAdam = new Image();
imgAdam.src = "./image/adam.gif";
export var Adam = new Adam(imgAdam);