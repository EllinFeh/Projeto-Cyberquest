class personagem{
    constructor(hp,def,atq,){
        this.hp = hp;
        this.def = def;
        this.atq = atq;
    }
}

export class Adam extends personagem{
    constructor(hp,def,atq,){
        super(hp,def,atq);
    }
    
    trirocket(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.ataque) - ObjAtacado.def);
        console.log ("trirocket foi usado!");
    }
    
    spraytransfer(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((Adam.atq * 2) - ObjAtacado.def)
        console.log ("spraytransfer foi usado!")
    }
    
    medbay(){
        return 70; 
    }
}


export class Inimigo extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Inimigo";

 
    }
}
