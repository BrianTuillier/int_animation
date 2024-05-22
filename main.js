intro1 =
  "Estuve divagando un buen rato por este bosque, no encuentro ninguna salida";
intro2 =
  "Despues de un buen tiempo caminando y caminando logre ver a lo lejos un castillo gigante y decidi acercarme";
let textos = [intro1, intro2];

let dialogoFrame;
let textoFrame;

function setup() {
  createCanvas(1366, 620);
  fondo = loadImage("Assets/Sprites/back-first-escene.jpeg");
}

function draw() {
  background(fondo);
  firstEscene();
}

// función de la primera escena

function firstEscene() {
  dialogoFrame = new seccionDialogo(310, 460, 800, 150);
  textoFrame = new dialogText(textos[0]);
  dialogoFrame.show();
  textoFrame.show();
}

// Función para cambiar de texto

function mouseClicked() {
  // for (i = textos; i < 2; i += textos) {
  if (textoFrame === textos[0]) {
    textos = textos[1];
  } else {
    textos = textos[0];
  }
}

//Clases de dialogo y texto

class seccionDialogo {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    fill(255, 150);
    rect(this.x, this.y, this.w, this.h);
  }
}

class dialogText {
  constructor(texts) {
    this.texts = texts;
  }
  show() {
    fill(0);
    textSize(17);
    textWrap(CHAR);
    textStyle(BOLD);
    text(this.texts, 350, 500);
  }
}
