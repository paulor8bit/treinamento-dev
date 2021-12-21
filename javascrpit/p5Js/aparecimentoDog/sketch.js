let vindo
let indo

function setup() {
  createCanvas(710, 400);
  indo = createVideo(['assets/indo.mp4', 'assets/indo.mp4']);
  

  vindo = createVideo(['assets/vindo.mp4', 'assets/vindo.mp4']);
  vindo.hide();
  indo.hide()
  
}

function draw() {
  background(150);
  image(vindo, 10, 10);
  image(indo, 10, 10);
  indo.play();
}

function mousePressed() {
  vindo.play();
}
