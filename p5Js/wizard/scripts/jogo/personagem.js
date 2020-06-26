class Personagem extends Animacao{ 

    
    constructor(matriz, imagem, x, variacaoY, largura, altura,
        larguraSprite, alturaSprite){

        super(matriz, imagem, x, variacaoY, largura, altura,
            larguraSprite, alturaSprite)
            this.variacaoY = variacaoY
            //colocar personagem no gramado
            this.yInicial = height - this.altura - this.variacaoY
            this.y = this.yInicial
            //colocar personagem no gramado
            this.velocidadeDoPulo = 0
            this.gravidade = 6
            this.pulos = 2
            this.alturaDoPulo = 50
            this.invencivel = false
    }
    pula() {
        if (this.pulos > 0){
            this.velocidadeDoPulo = - this.alturaDoPulo
            this.pulos--
        }
      
    }
   direita(){
       console.log('Foi Para direita')
        this.x = this.x+20
    }
    esquerda(){
        console.log('Foi Para Esquerda')
         this.x = this.x-20
     }
    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        //voltar ao chao
        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.pulos = 2
        }
    }
    ficaInvencivel() {
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }
    estaColidindo(inimigo) {
        if (this.invencivel) { 
            return false
        }
        const hitBox = .7
        //Mostrar campos
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


