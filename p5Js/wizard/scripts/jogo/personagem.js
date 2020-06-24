class Personagem extends Animacao{ 

    
    constructor(matriz, imagem, x, largura, altura,
        larguraSprite, alturaSprite){

        super(matriz, imagem, x, largura, altura,
            larguraSprite, alturaSprite)
            
            this.yInicial = height - this.altura
            this.y = this.yInicial
            this.velocidadeDoPulo = 0
            this.gravidade = 10
    }
    pula() {
        this.velocidadeDoPulo = - 30
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial
        }
    }

    estaColidindo(inimigo) {
        const hitBox = .7
        
        // noFill()
        // rect(this.x, this.y, this.largura, this.altura)
        // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)

        const colisao = collideRectRect(this.x, this.y,
            this.largura * hitBox, this.altura * hitBox, 
            inimigo.x, inimigo.y,
            inimigo.largura * hitBox, inimigo.altura * hitBox)
            
        return colisao
    }
}


