let imagemCenario
let imagemPersonagem
let cenario
let somDoJogo
let personagem
function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  somDoJogo = loadSound('sons/atack.mp3')
}
function setup() {
  somDoJogo.loop()
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(imagemPersonagem)
  frameRate(30)
  
  
}

function draw() {
  cenario.exibe()
  cenario.move()
  personagem.exibe()  
  
  
}