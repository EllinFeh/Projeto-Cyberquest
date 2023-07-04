import { textoExibido, mostrarCont } from "./store";

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
          textoExibido.set('Você usou Trirocket! Vez do seu inimigo!');
         mostrarCont.set(false);

         setTimeout(() => {
            textoExibido.set('');
            mostrarCont.set(true);
          }, 8000);
        }
        else{
            textoExibido.set('Você errou o ataque! Vez do seu inimigo!');
            mostrarCont.set(false);
   
            setTimeout(() => {
               textoExibido.set('');
               mostrarCont.set(true);
             }, 8000);
        }
    }
    
    spraytransfer(ObjAtacado){
        let dado2 = Math.floor(Math.random() * 15)
        if (dado2 >= 6) {
        ObjAtacado.hp = ObjAtacado.hp - ((Adam.atq * 4.5) - ObjAtacado.def)
        textoExibido.set('Você usou spraytransfer! Vez do seu inimigo!');
        mostrarCont.set(false);

        setTimeout(() => {
           textoExibido.set('');
           mostrarCont.set(true);
         }, 8000);
        }
        else{
            textoExibido.set('Você errou o ataque! Vez do seu inimigo!');
            mostrarCont.set(false);
   
            setTimeout(() => {
               textoExibido.set('');
               mostrarCont.set(true);
             }, 8000);
        }
    }
    
    medbay(){
        let dado3 = Math.floor(Math.random() * 15)
        if (dado3 >= 8) {
            textoExibido.set('Você se curou! Vez do seu inimigo!');
            mostrarCont.set(false);
            
            setTimeout(() => {
                textoExibido.set('');
                mostrarCont.set(true);
            }, 8000);
            return 70; 
        }

        else{
            textoExibido.set('Medbay Falhou! Vez do seu inimigo!');
            mostrarCont.set(false);
   
            setTimeout(() => {
               textoExibido.set('');
               mostrarCont.set(true);
             }, 8000);
        }
    }
}


export class Inimigo extends personagem{
    constructor(hp,def,atq){
        super(hp,def,atq);
        this.id = "Inimigo";

 
    }
}
