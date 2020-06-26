
function preload() {
    fita = loadJSON('../fita/fita.json')
  
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png')
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    imagemCenarioUm = loadImage('imagens/cenario/floresta1.png')
    imagemCenarioDois = loadImage('imagens/cenario/floresta2.png')
    imagemCenarioTres = loadImage('imagens/cenario/floresta3.png')
    imagemCenarioQuatro= loadImage('imagens/cenario/floresta4.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    imagemVida = loadImage('imagens/assets/coracao.png')
    
    imagemPersonagem = loadImage('imagens/personagem/dogerun.png')
    
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinhavoadora.png')
    
    
    
    somDoJogo = loadSound('sons/atack.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    // somGameOver = loadSound('sons/game-over-sound-effect.mp3');
    

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')

  }