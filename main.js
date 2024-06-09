// Variables para controlar el estado de la animación de diálogo
let contador = 0;
let contadorSeg = 0;
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

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

// Función que se ejecuta al inicio del programa
function setup() {
  // Se utiliza la función para crear el canvas donde se mostrará la animación
  createCanvas(1360, 764);

  // Cargar las imágenes que se utilizarán
  fondo = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");

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
  if (usarFondoOpciones) {
    background(fondoOpciones);
  } else if (contador < intros.length) {
    if (intros[contador] === "El camino se termina dividiendo en 2") {
      background(fondoOpciones);
      usarFondoOpciones = true;
    } else if (intros[contador] === "...") {
      background(0); // Pantalla en negro
    } else {
      background(fondo);
    }
  } else {
    background(fondo);
  }
  // Actualizar la opacidad para manejar las transiciones
  updateOpacity();
  // Dibujar la escena

  primeraEscena();
}
