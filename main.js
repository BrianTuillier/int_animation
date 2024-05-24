// Se declaran las variables que contienen los dialogos

intro1 =
  "Estuve divagando un buen rato por este bosque, no encuentro ninguna salida";
intro2 =
  "Despues de un buen tiempo caminando y caminando logre ver a lo lejos un castillo gigante y decidi acercarme";

textoBoton1 = "si";
textoBoton2 = "no";

// Se declara una variable array para contener los dialogos
let textosAr = [intro1, intro2];

// Se declara una variable array para contener los dialogos de los botones
let textosBotton = [intro1, intro2];

// Se declaran las variables que almacenaran cada clase que se utilize
let dialogoFrame;
let textoFrame;
let eleccionBoton;
let sprayPersonaje;
let eleccionBoton2;
let textoFrameBoton;
let textoFrameBoton2;

// Se declaran las variables que contendran los sprites
let fondo;
let personajeOgro;

// Función para declarar el inicio del programa
function setup() {
  // Se utiliza la función para crear el canvas donde se mostrara la animación
  createCanvas(1366, 620);

  //Declaramos las imágenes que se utilizaran
  fondo = loadImage("Assets/Sprites/forest.jpeg");
  ObjetoLlave = loadImage("Assets/Sprites/llave.jpeg");
  personajeOgro = loadImage("Assets/Sprites/ogro.png");
}

// Función para declarar que se dibujará por pantalla
function draw() {
  // Se declara que el background sera la variable "Fondo" el cual contiene la imagen que declaramos
  background(fondo);

  // Llamamos a la función "firstEscene" donde mostrará las primeras animaciones
  firstEscene();
}

// Función de la primera escena
function firstEscene() {
  // Creamos una sección de dialogo a travez de la clase "secciónDialogo"
  dialogoFrame = new seccionDialogo();

  /* Creamos el dialogo de texto a travez de la clase "dialogoTexto", 
  le damos que texto de la variable array que queremos que se muestre dentro de la sección de dialogó
  Declaramos la posición donde queremos que aparezca el texto*/
  textoFrame = new dialogoTexto(textosAr[0], 350, 500);

  /* Creamos los botones de opciónes a travez de la clase "botonOpcion",
  Le damos los valores de: posiciión horizontal, posición vertical, ancho y altura.*/
  eleccionBoton = new botonOpcion(450, 230, 200, 70);
  eleccionBoton2 = new botonOpcion(700, 230, 200, 70);

  //Creamos denuevo el dialogo de texto a travez de la clase "dialogoTexto" pero esta vez con otra variable array.
  textoFrameBoton = new dialogoTexto(textoBoton1, 540, 270);
  textoFrameBoton2 = new dialogoTexto(textoBoton2, 790, 270);

  /* En esta parte se llama a cada variable que contenga las clases creadas para utilizar la función "show()"
  para mostrarlas por  pantalla.*/
  dialogoFrame.show();
  textoFrame.show();
  eleccionBoton.show();
  eleccionBoton2.show();
  textoFrameBoton.show();
  textoFrameBoton2.show();
}

// Función para cambiar de texto cuando se clickee la pantalla

function mouseClicked() {
  if (textosAr === intro1) {
    textosAr = intro2;
  } else {
    textosAr = intro1;
  }
}

// Se crean las clases para llamarlas y ser reutilizadas cuando queramos, sin necesidad de crear diferentes funciones a cada rato.

// Se crea la clase "seccionDialogo" que muestra el rectangulo donde se mostrara el texto de dialogo.
// En este caso no damos a elegir los valores ya que esta sección de dialogo siempre quedará en la misma posición
class seccionDialogo {
  show() {
    fill(255, 150);
    rect(310, 460, 800, 150);
  }
}

// Se crea la clase "dialogoTexto" que muestra el texto y su posición.
class dialogoTexto {
  /* La función constructor sirve para inicializar un objeto de una clase. 
  En el constructor se asignan los valores iniciales del nuevo objeto. */
  constructor(texts, x, y) {
    this.texts = texts;
    this.x = x;
    this.y = y;
  }

  // La función "show()" sirve para declarar que objetos en la clase se mostrarán al ser llamadas.
  show() {
    fill(0);
    textSize(17);
    textAlign(LEFT);
    textStyle(BOLD);
    text(this.texts, this.x, this.y);
  }
}

// Se crea la clase "personaje" que muestra la imagen de los personajes que apareceran.
class personaje {
  constructor(img) {
    this.img = img;
  }
  show() {
    image(this.img, 300, 0);
  }
}

// Se crea la clase "botonOpción" que muestra el boton para la toma de decisiónes.
class botonOpcion {
  constructor(x, y, w, h, text) {
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
