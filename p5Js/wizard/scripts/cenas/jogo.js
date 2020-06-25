class Jogo {
    constructor(){
        this.inimigoAtual = 0 

    }
    setup() {
        
        cenario = new Cenario(imagemCenario, 3)
        // cenarioUm = new Cenario(imagemCenarioUm, 1)
        // cenarioDois = new Cenario(imagemCenarioDois, 3)
        pontuacao = new Pontuacao()
      
        personagem = new Personagem(matrizPersonagem, imagemPersonagem,
        0, 30, 110, 135, 220, 270)
       
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52,
        30, 52, 52, 104, 104, 10, 100)
        
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width-52,
        0, 200, 200, 400, 400, 10, 100)
        
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width-52,
        200, 100, 75, 200, 150, 10, 100)
      
        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)


    }
keyPressed(key) {
// if (key === 'ArrowUp') {
//   personagem.pula()
//   somDoPulo.play()
// }

  if(keyIsDown(UP_ARROW) || keyIsDown(87))
  {
    personagem.pula()
    somDoPulo.play()
  }
    }
    
    
draw() {
    cenario.exibe()
    cenario.move()
    // cenarioUm.exibe()
    // cenarioDois.exibe()
    // cenarioUm.move()
    // cenarioDois.move()
    pontuacao.exibe()
    pontuacao.adcionarPonto()
    personagem.aplicaGravidade()
    personagem.exibe()  
    
  
    const inimigo = inimigos[this.inimigoAtual]
    const inimigoVisivel = inimigo.x < - inimigo.largura
    
    inimigo.exibe()
    inimigo.move()
  
    if (inimigoVisivel){
        this.inimigoAtual++
      if (this.inimigoAtual > 2){
        this.inimigoAtual = 0
      }
      inimigo.velocidade = parseInt(random(10,30))
    }
    
     
    if(personagem.estaColidindo(inimigo) ) {
      console.log('colidiu')
      somDoJogo.stop()
      // noLoop()
      // somGameOver.play()
      image(imagemGameOver, ( width / 2 ) - 206, ( height / 2 ) - 39, 412, 78);
    }
}



}