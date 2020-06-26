class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura,
        larguraSprite, alturaSprite, velocidade
        //  ,delay
         ){

        super(matriz, imagem, x, variacaoY, largura, altura,
            larguraSprite, alturaSprite, velocidade
            // , delay
            )
            
                   

        this.velocidade = velocidade
        // this.delay = delay
        
        //Tempo que aparece na tela primeira vez
        this.x = width
        // this.x = width + this.delay
        }  
    move() {
        this.x = this.x - this.velocidade
    
        // if(this.x < -this.largura - this.delay) { 
            // this.x = width
        // }
    }

    aparece() {
        this.x = width
    }
}