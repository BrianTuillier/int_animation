// Variables para controlar el estado de la animación de diálogo
let contador = 0;
let contadorSeg = 0;
let contadorTer = 0;
let opcionSeleccionada = null;
let opacidadDes = false; // Indica si se está realizando la animación de desaparición
let opacidadApa = true; // Indica si se está realizando la animación de aparición
let cantidadOpacidad = 30; // Controla la velocidad de la animación
let opacity = 200; // Controla la opacidad del cuadro de diálogo y el texto

// Variables para las clases que se utilizan
let dialogoFrame;
let textoFrame;
let botonIzquierda;
let botonDerecha;

// Variables para las imágenes de fondo
let fondo;
let fondoOpciones;
let usarFondoOpciones = false;
let Llave;
let usarFondoLlave = false;
let Castillo;
let usarFondoCastillo = false;

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

// Función que se ejecuta al inicio del programa
function setup() {
  // Se utiliza la función para crear el canvas donde se mostrará la animación
  createCanvas(1360, 764);

  // Cargar las imágenes que se utilizarán
  fondo = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  Llave = loadImage("Assets/Sprites/key-option.jpeg");
  CastilloLejos = loadImage("Assets/Sprites/castle-away.jpeg");
  Castillo = loadImage("Assets/Sprites/castle.jpeg");

  // Inicializar los botones de opciones, pero no mostrarlos aún
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
  textoFrame = new DialogoTexto("", 330, 570, 760, 110);
}

// Función que se ejecuta en cada frame
function draw() {
  // Establecer el fondo dependiendo del estado actual del diálogo
  // Actualizar la opacidad para manejar las transiciones
  primerFondo();
  segundoFondo();
  tercerFondo();
  // Dibujar la escena

  updateOpacity();
  mostrarEscenas();
}

function primerFondo() {
  if (usarFondoOpciones) {
    background(fondoOpciones);
  } else if (contador < intro.length) {
    if (intro[contador] === "El camino se termina dividiendo en 2") {
      background(fondoOpciones);
      usarFondoOpciones = true;
      console.log("funca fondo opciones");
    } else if (intro[contador] === "...") {
      background(0); // Pantalla en negro
      console.log("funca oscuro");
    } else {
      background(fondo);
    }
  }
}

function segundoFondo() {
  if (usarFondoLlave) {
    background(Llave);
  } else if (contadorSeg < primeraOpcion.length) {
    if (primeraOpcion[contadorSeg] === "¿Qué es eso?") {
      background(Llave);
      usarFondoLlave = true;
    } else if (primeraOpcion[contadorSeg] === "...") {
      background(0);
    } else {
      background(fondo);
    }
  }
}

function tercerFondo() {
  if (usarFondoCastillo) {
    background(CastilloLejos);
  } else if (contadorTer < introCastillo.length) {
    if (introCastillo[contadorTer] === "Wow....") {
      background(CastilloLejos);
      usarFondoCastillo = true;
      console.log("Castillo");
    } else if (introCastillo[contadorTer] === "...") {
      background(0);
    }
  }
}
