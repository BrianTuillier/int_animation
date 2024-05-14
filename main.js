let intro1 =
  "Estuve divagando un buen rato por este bosque, no encuentro ninguna salida";
let intro2 =
  "Despues de un buen tiempo caminando y caminando logre ver a lo lejos un castillo gigante y decidi acercarme";
let textos = [intro1, intro2];

function setup() {
  createCanvas(1366, 620);
}

function draw() {
  background(0);
  seccionDialogo();
}

//

function seccionDialogo() {
  fill(150, 0, 0, 130);
  rect(310, 460, 800, 130);
  textoNarrativo();
}

function textoNarrativo() {
  fill(255);

  textSize(17);
  textWrap(CHAR);
  text(textos[0], 350, 500, 700);
}
