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
        let dado1 = Math.floor(Math.random() * 15)
        if (dado1 >= 4) {
          ObjAtacado.hp = ObjAtacado.hp - ((this.ataque) - ObjAtacado.def);
          console.log ("trirocket foi usado!");
        }
        else{
            console.log ("você errou!");
        }
    }
    
    spraytransfer(ObjAtacado){
        let dado2 = Math.floor(Math.random() * 15)
        if (dado2 >= 6) {
        ObjAtacado.hp = ObjAtacado.hp - ((Adam.atq * 4.5) - ObjAtacado.def)
        console.log ("spraytransfer foi usado!")
        }
        else{
            console.log ("você errou!");
        }
    }
    
    medbay(){
        let dado3 = Math.floor(Math.random() * 15)
        if (dado3 >= 7) {
        return 70; 
        }
        else{
            console.log ("você não conseguiu se curar!");
        }
    }
}


export class Inimigo extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Inimigo";

 
    }
}
