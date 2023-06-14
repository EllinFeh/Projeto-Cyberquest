 class Personagem{
    constructor(atq, hp, def, sct){
        this.atq = atq
        this.hp = hp
        this.def = def
        this.sct = sct
    }
}


  export class Adam extends Personagem{
    constructor(img){
        this.img = <img src="images/personagens/personagem.gif"></img>
        super()
    }
    atacar(){
        objAtacado.hp = objAtacado.hp - (this.atq - objAtacado.def)

    }
}



 class inimigo extends Personagem{
    constructor(){
        super()
    }
}


