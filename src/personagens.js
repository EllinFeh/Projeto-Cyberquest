 class Personagem{
    constructor(atq, hp, def, sct){
        this.atq = atq
        this.hp = hp
        this.def = def
        this.sct = sct
    }
}


  class Adam extends Personagem{
    constructor(){
        super()
    }
    atacar(){
        objAtacado.hp = objAtacado.hp - (this.atq - objAtacado.def)

    }
}



 class Inimigo extends Personagem{
    constructor(){
        super()
    }
}

let prota = new Adam(100,5,40,100)


console.log(prota)