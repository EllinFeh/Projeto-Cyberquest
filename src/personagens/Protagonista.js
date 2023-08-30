
class personagem{
    constructor(hp,def,atq){
        this.hp = hp;
        this.def = def;
        this.atq = atq;
    }
};


export class Adam extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Protagonista";
    }
    
    
    trirocket(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq - ObjAtacado.def);
    }
    
    spraytransfer(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq * 3 - ObjAtacado.def);
    }
    
    medbay(ObjReceptor){
        ObjReceptor.hp = (ObjReceptor.hp +40);
    }
};


export class Inimigo extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Inimigo";
    }
    attacknemy1(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq - ObjAtacado.def);
    }
    attackenemy2(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq * 3 - ObjAtacado.def);
    }
    attackenemy3(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq * 2 - ObjAtacado.def);
    }
}
