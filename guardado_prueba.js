// Variables para controlar el estado de la animación de diálogo
let contador = 0;
let contadorSeg = 0;
let contadorTer = 0;
let contadorCuar = 0;
let contadorQuin = 0;
let contadorSext = 0;
let opcionSeleccionada = null;
let opcionSeleccionada2 = null;
let opcionSeleccionada3 = null;
let opacidadDes = false; // Indica si se está realizando la animación de desaparición
let opacidadApa = true; // Indica si se está realizando la animación de aparición
let cantidadOpacidad = 30; // Controla la velocidad de la animación
let opacity = 200; // Controla la opacidad del cuadro de diálogo y el texto

// Variables para las clases que se utilizan
let dialogoFrame;
let textoFrame;
let botonIzquierdaInicio;
let botonDerechaInicio;
let botonIzquierdaCastillo;
let botonDerechaCastillo;
let botonIzquierdaLobby;
let botonDerechaLobby;

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

// Variables para las imágenes de fondo
let fondoBosque;
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
let Escaleras;
let usarFondoEscaleras;
let UsarFondoOscuro = false;
let Pasillo;
let usarFondoPasillo = false;

let tieneLlave = false;

let cancionBosque;

// Función que se ejecuta al inicio del programa
function setup() {
  // Crear el canvas donde se mostrará la animación
  createCanvas(1360, 764);

  // Cargar las imágenes que se utilizarán
  fondoBosque = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  Llave = loadImage("Assets/Sprites/key-option.jpeg");
  CastilloLejos = loadImage("Assets/Sprites/castle-away.jpeg");
  CastilloCerca = loadImage("Assets/Sprites/castle.jpeg");
  Lobby = loadImage("Assets/Sprites/Lobby.jpeg");
  Pasillo = loadImage("Assets/Sprites/hall.jpeg");
  Escaleras = loadImage("Assets/Sprites/upstairs.jpeg");
  // Musicas de fondos
  cancionBosque = loadSound("Assets/Bg_sound/Forest.wav");

  // Inicializar los botones de opciones, pero no mostrarlos aún
  botonIzquierdaInicio = new BotonOpcionInicio(
    introOpcion,
    width / 2 - 200,
    height / 2,
    150,
    70,
    primeraOpcion
  );
  botonDerechaInicio = new BotonOpcionInicio(
    introOpcion2,
    width / 2 + 50,
    height / 2,
    150,
    70,
    segundaOpcion
  );
  botonIzquierdaCastillo = new BotonOpcionSegundo(
    opcionEntrarCastillo,
    width / 2 - 200,
    height / 2,
    150,
    70,
    entradaCastillo
  );
  botonDerechaCastillo = new BotonOpcionSegundo(
    opcionNoEntrarCastillo,
    width / 2 + 50,
    height / 2,
    150,
    70,
    noEntradaCastillo
  );

  botonIzquierdaLobby = new BotonOpcionTercero(
    castilloOpcion,
    width / 2 - 200,
    height / 2,
    150,
    70,
    opcionCastillo
  );
  botonDerechaLobby = new BotonOpcionTercero(
    castilloOpcion2,
    width / 2 + 50,
    height / 2,
    150,
    70,
    opcionCastillo2
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
  // fondoLobby();
  // fondoEscalera();

  // Dibujar la escena
  updateOpacity();
  mostrarEscena();
  mostrarEscenaCastillo();
  mostrarEscenaLobby();
}

// Función para establecer el segundo fondo
function fondosInicio() {
  if (usarFondoLlave) {
    background(Llave);
  } else if (contadorSeg < primeraOpcion.length) {
    if (primeraOpcion[contadorSeg] === "¿Qué es eso?") {
      usarFondoLlave = true;
      usarFondoOpciones = false;
    } else if (intro[contador] === "...") {
      background(0);
    } else {
      background(fondoBosque);
    }
    if (usarFondoOpciones) {
      background(fondoOpciones);
    } else if (contador < intro.length) {
      if (intro[contador] === "El camino se termina dividiendo en 2") {
        usarFondoOpciones = true;
      }
    }
  }
}

// Función fara establecer el tercer fondo

function fondosCastillo() {
  if (usarFondoCastillo) {
    background(CastilloLejos);
  } else if (primeraOpcion[contadorSeg] === "...") {
    background(0);
  } else if (introCastillo[contadorTer] === "Wow....") {
    background(CastilloLejos);
    usarFondoCastillo = true;
  }
  if (usarFondoCastilloCerca) {
    background(CastilloCerca);
  } else if (introCastillo[contadorTer] === "Raro que no haya nadie aquí") {
    usarFondoCastilloCerca = true;
  }
  if (entradaCastillo[contadorCuar] === "...") {
    background(0);
  } else if (
    entradaCastillo[contadorCuar] ===
    "Que ruidosas puerta...creo que hasta Rio de Janeiro se enteró que estoy aquí"
  ) {
    background(0);
  } else if (entradaCastillo[contadorCuar] === "¿Por donde voy?") {
  }
  if (usarFondoLobby) {
    background(Lobby);
  } else if (entradaCastillo[contadorCuar] === "Wow") {
    usarFondoLobby = true;
  }
  if (noEntradaCastillo[contadorTer] === "CHAU") {
    UsarFondoOscuro = true;
  }
}

// function fondoLobby() {
//   if (UsarFondoOscuro) {
//     background(0);
//   } else if (opcionCastillo[contadorCuar] === "...") {
//     UsarFondoOscuro = true;
//     usarFondoEscaleras = false;
//     console.log("Fondo oscuro funcionaaa");
//   }
//   if (usarFondoPasillo) {
//     background(Pasillo);
//   } else if (opcionCastillo[contadorCuar] === "Oooooookey????") {
//     usarFondoPasillo = true;
//   }
// }

// function fondoEscalera() {
//   if (usarFondoEscaleras) {
//     background(Escaleras);
//   } else if (opcionCastillo2[contadorCuar] === "¿Una escalera?") {
//     usarFondoEscaleras = true;
//     console.log("Funciona fondo escalera");
//   }
// }
