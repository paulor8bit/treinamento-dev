class Inimigo extends Animacao {
    constructor(matriz, imagem, x, largura, altura,
        larguraSprite, alturaSprite){

        super(matriz, imagem, x, largura, altura,
            larguraSprite, alturaSprite)

       
        this.frameAtual = 0

                this.velocidade = 10
        }  
    move() {
        this.x = this.x - this.velocidade

        if(this.x < -this.largura) { 
            this.x = width
        }
    }
}