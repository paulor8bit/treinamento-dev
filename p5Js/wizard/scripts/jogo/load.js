
function preload() {
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png')
    imagemCenario = loadImage('imagens/cenario/floresta.png')
    // imagemCenarioUm = loadImage('imagens/cenario/floresta1.png')
    // imagemCenarioDois = loadImage('imagens/cenario/floresta2.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png')
    
    imagemPersonagem = loadImage('imagens/personagem/correndo.png')
    
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinhavoadora.png')
    
    
    
    somDoJogo = loadSound('sons/atack.mp3')
    somDoPulo = loadSound('sons/somPulo.mp3')
    // somGameOver = loadSound('sons/game-over-sound-effect.mp3');
    

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')

  }