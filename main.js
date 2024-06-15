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
let CastilloLejos;
let usarFondoCastillo = false;
let CastilloCerca;
let usarFondoCastilloCerca = false;
let Lobby;
let usarFondoLobby = false;

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

// Función que se ejecuta al inicio del programa
function setup() {
  // Crear el canvas donde se mostrará la animación
  createCanvas(1360, 764);

  // Cargar las imágenes que se utilizarán
  fondo = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  Llave = loadImage("Assets/Sprites/key-option.jpeg");
  CastilloLejos = loadImage("Assets/Sprites/castle-away.jpeg");
  CastilloCerca = loadImage("Assets/Sprites/castle.jpeg");
  Lobby = loadImage("Assets/Sprites/Lobby.jpeg");
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
  botonIzquierdaCastillo = new BotonOpcion(
    introOpcion,
    width / 2 - 200,
    height / 2,
    150,
    70,
    castilloOpcion
  );
  botonDerechaCastillo = new BotonOpcion(
    introOpcion2,
    width / 2 + 50,
    height / 2,
    150,
    70,
    castilloOpcion2
  );
  dialogoFrame = new SeccionDialogo();
  textoFrame = new DialogoTexto("", 330, 570, 760, 110);
}

// Función que se ejecuta en cada frame
function draw() {
  // Establecer el fondo dependiendo del estado actual del diálogo
  // Actualizar la opacidad para manejar las transiciones
  fondosInicio();
  fondosCastillo();

  // Dibujar la escena
  updateOpacity();
  mostrarEscenas();
}

// Función para establecer el segundo fondo
function fondosInicio() {
  if (usarFondoLlave) {
    background(Llave);
  } else if (contadorSeg < primeraOpcion.length) {
    if (primeraOpcion[contadorSeg] === "¿Qué es eso?") {
      usarFondoLlave = true;
    } else if (intro[contador] === "...") {
      background(0);
    } else {
      background(fondo);
    }
  }
}

// Función fara establecer el tercer fondo
function fondosCastillo() {
  if (usarFondoCastillo) {
    background(CastilloLejos);
  } else if (introCastillo[contadorTer] === "Wow....") {
    background(CastilloLejos);
    usarFondoCastillo = true;
  } else if (primeraOpcion[contadorSeg] === "...") {
    background(0);
  }
  if (usarFondoCastilloCerca) {
    background(CastilloCerca);
  } else if (introCastillo[contadorTer] === "Raro que no haya nadie aquí") {
    usarFondoCastilloCerca = true;
  }
  if (introCastillo[contadorTer] === "...") {
    background(0);
  } else if (
    introCastillo[contadorTer] ===
    "Que ruidosas puerta...creo que hasta Rio de Janeiro se enteró que estoy aquí"
  ) {
    background(0);
  }
  if (usarFondoLobby) {
    background(Lobby);
  } else if (introCastillo[contadorTer] === "Wow") {
    usarFondoLobby = true;
  }
}
