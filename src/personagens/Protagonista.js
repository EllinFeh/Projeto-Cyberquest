class personagem{
    constructor(hp,def,atq,sct){
        this.hp = hp;
        this.def = def;
        this.atq = atq;
        this.sct = sct;
        this.img = img
    }
}

export class Adam extends personagem{
    constructor(hp,def,atq,sct,img){
        super(hp,def,atq,sct);
        this.img = img;
        this.id = "Adam";
      
    }
    trirocket(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.ataque) - ObjAtacado.def)
    }
    spraytransfer(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.ataque * 2) - ObjAtacado.def)
    }
    medbay(ObjAtacado){
        this.hp = this.hp + 70
    }
}

function atq1(){
   Adam.trirocket(Inimigo)
}
function atq2(){
   Adam.spraytransfer(Inimigo)
}

function atq3() {
    Adam.medbay(Adam)
}

const prota = new Adam(100,5,15,70);
var imgAdam = new Image();
imgAdam.src = "./images/adam.gif";


export class Inimigo extends personagem{
    constructor(hp,def,atq,sct,img){
        super(hp,def,atq,sct);
        this.img = img;
        this.id = "Inimigo";
        this.srcX = this.srcY = 0;
 
    }
}

const enemy = new Inimigo(100,10,5,0);
var imgInimigo = new Image();
imgInimigo.src = "./images/inimigo1.gif";