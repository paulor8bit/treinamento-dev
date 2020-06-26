class Pontuacao { 
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text(parseInt(this.pontos), width - 30, 50)
    }

  

    adcionarPonto() {
        this.pontos = this.pontos + 0.2
        
    }

    adcionarPontoDuplo(){
        this.pontos = this.pontos + 5
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        const mensagem = 'turbo'
        text('Turbo',  width -50, 85)
    }
}