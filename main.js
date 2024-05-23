intro1 =
  "Estuve divagando un buen rato por este bosque, no encuentro ninguna salida";
intro2 =
  "Despues de un buen tiempo caminando y caminando logre ver a lo lejos un castillo gigante y decidi acercarme";
let textosAr = [intro1, intro2];

let dialogoFrame;
let textoFrame;
let sprayPersonaje;

let fondo;
let personajeOgro;

function setup() {
  createCanvas(1366, 620);
  fondo = loadImage("Assets/Sprites/back-first-escene.jpeg");
  ObjetoLlave = loadImage("Assets/Sprites/llave.jpeg");
  personajeOgro = loadImage("Assets/Sprites/ogro.png");
}

function draw() {
  background(fondo);
  firstEscene();
}

// Función de la primera escena

function firstEscene() {
  dialogoFrame = new seccionDialogo();
  textoFrame = new dialogTexto(textosAr[1]);
  sprayPersonaje = new personaje(personajeOgro);

  sprayPersonaje.show();
  dialogoFrame.show();
  textoFrame.show();
}

// Función para cambiar de texto

function mouseClicked() {
  if (textosAr === intro1) {
    textosAr = intro2;
  } else {
    textosAr = intro1;
  }
}
//Clases de dialogo y texto

class seccionDialogo {
  show() {
    fill(255, 150);
    rect(310, 460, 800, 150);
  }
}

class dialogTexto {
  constructor(texts) {
    this.texts = texts;
  }
  show() {
    fill(0);
    textSize(17);
    textAlign(LEFT);
    textStyle(BOLD);
    text(this.texts, 350, 500);
  }
}

class personaje {
  constructor(img) {
    this.img = img;
  }
  show() {
    image(this.img, 300, 0);
  }
}
