class Personagem extends Animacao{ 

    
    constructor(matriz, imagem, x, largura, altura,
        larguraSprite, alturaSprite){

        super(matriz, imagem, x, largura, altura,
            larguraSprite, alturaSprite)
            
            this.yInicial = height - this.altura
            this.y = this.yInicial
            this.velocidadeDoPulo = 0
            this.gravidade = 4
            this.pulos = 2
    }
    pula() {
        if (this.pulos > 0){
            this.velocidadeDoPulo = - 30
            this.pulos--
        }
        

    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.pulos = 2
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


