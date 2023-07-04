import { textoExibido, mostrarCont } from "./store";


class personagem{
    constructor(hp,def,atq,){
        this.hp = hp;
        this.def = def;
        this.atq = atq;
    }
};


export class Adam extends personagem{
    constructor(hp,def,atq,){
        super(hp,def,atq);
    }
    
    
    trirocket(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq - ObjAtacado.def);
    }
    
    spraytransfer(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.atq * 3 - ObjAtacado.def);
    }
    
    medbay(ObjReceptor){
        ObjReceptor.hp = (ObjReceptor.hp * 2);
    }
};



export class Inimigo extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Inimigo";
    }
};
