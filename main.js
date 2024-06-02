// Se declaran las variables que contienen los diálogos
let intros = [
  "Estuve divagando un buen rato por este bosque, no encuentro ninguna salida",
  "Después de un buen tiempo caminando y caminando logré ver a lo lejos un castillo y decidí acercarme",
];

let introOpcion = "Seguir camino por la izquierda";
let introOpcion2 = "Seguir camino por la derecha";

let primeraOpcion = "Te encuentras un objeto raro que podría ser útil";
let segundaOpcion = "Te encuentras un misterioso camino lleno de luces";

let index = 0;
let opcionSeleccionada;

// Se declaran las variables que almacenarán cada clase que se utilice
let dialogoFrame;
let textoFrame;
let botonIzquierda;
let botonDerecha;

// Se declaran las variables que contendrán los sprites
let fondo;
let fondoOpciones;

// Padding para el texto dentro del rectángulo
let padding = 20;

// Función para declarar el inicio del programa
function setup() {
  // Se utiliza la función para crear el canvas donde se mostrará la animación
  createCanvas(1366, 764);

  // Declaramos las imágenes que se utilizarán
  fondo = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");

  // Inicializamos los botones de opciones, pero no los mostramos aún
  botonIzquierda = new BotonOpcion(
    introOpcion,
    width / 2 - 200,
    height / 2,
    150,
    70,
    primeraOpcion
  );
  botonDerecha = new BotonOpcion(
    introOpcion2,
    width / 2 + 50,
    height / 2,
    150,
    70,
    segundaOpcion
  );
  dialogoFrame = new SeccionDialogo();
}

// Función para declarar qué se dibujará por pantalla
function draw() {
  // Se declara que el background será la variable "fondo" el cual contiene la imagen que declaramos
  if (index < intros.length) {
    background(fondo);
  } else {
    background(fondoOpciones);
  }
  firstEscene();
}

// Función de la primera escena
function firstEscene() {
  // Controlar visibilidad de la sección de diálogo
  if (index < intros.length || opcionSeleccionada) {
    dialogoFrame.show();
  } else {
    dialogoFrame.hide();
  }

  // Creamos una sección de diálogo a través de la clase "SeccionDialogo"
  let texto = "";

  if (index < intros.length) {
    texto = intros[index];
  } else if (opcionSeleccionada) {
    texto = opcionSeleccionada;
  }

  let lines = texto.split("\n");
  let maxLines = 4;

  if (lines.length > maxLines) {
    // Solo mostramos las primeras líneas que quepan en el cuadro de diálogo
    texto = lines.slice(0, maxLines).join("\n");
  }

  textoFrame = new DialogoTexto(texto, 330, 570, 760, 110); // Ajustamos el valor de y y el ancho para incluir padding
  textoFrame.show();

  if (index >= intros.length && !opcionSeleccionada) {
    botonIzquierda.show();
    botonDerecha.show();
    dialogoFrame.hide();
  } else {
    botonIzquierda.hide();
    botonDerecha.hide();
  }
}

// Se crean las clases para llamarlas y ser reutilizadas cuando queramos, sin necesidad de crear diferentes funciones a cada rato.

// Se crea la clase "SeccionDialogo" que muestra el rectángulo donde se mostrará el texto de diálogo.
class SeccionDialogo {
  constructor() {
    this.visible = true;
  }

  show() {
    if (this.visible) {
      fill(255, 150);
      rect(310, 560, 800, 150);
    }
  }

  hide() {
    this.visible = false;
  }
}

// Se crea la clase "DialogoTexto" que muestra el texto y su posición.
class DialogoTexto {
  constructor(texts, x, y, w, h) {
    this.texts = texts;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(0);
    textSize(17);
    textAlign(LEFT, TOP);
    textWrap(CHAR);
    textStyle(BOLD);
    text(
      this.texts,
      this.x + padding,
      this.y + padding,
      this.w - padding * 2,
      this.h - padding * 2
    ); // Agregamos padding a los lados
  }
}

// Se crea la clase "Personaje" que muestra la imagen de los personajes que aparecerán.
class Personaje {
  constructor(img) {
    this.img = img;
  }

  show() {
    image(this.img, 300, 0);
  }
}

// Se crea la clase "BotonOpcion" que muestra el botón para la toma de decisiones.
class BotonOpcion {
  constructor(text, x, y, w, h, resultado) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.resultado = resultado;
    this.button = createButton(this.text);
    this.button.position(this.x, this.y);
    this.button.size(this.w, this.h);
    this.button.mousePressed(() => this.seleccionarOpcion());
    this.button.hide();
  }

  show() {
    this.button.show();
  }

  hide() {
    this.button.hide();
  }

  seleccionarOpcion() {
    opcionSeleccionada = this.resultado;
    dialogoFrame = new SeccionDialogo();
    textoFrame = new DialogoTexto(opcionSeleccionada, 330, 570, 760, 110);
    dialogoFrame.show(); // Muestra la nueva sección de diálogo
    textoFrame.show();
  }
}

// Función para cambiar de texto cuando se clickee la pantalla
function mousePressed() {
  if (index < intros.length) {
    index++;
  } else if (opcionSeleccionada) {
    opcionSeleccionada = true;
  }
}
