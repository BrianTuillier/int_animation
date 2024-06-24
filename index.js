// Variables para las clases que se utilizan
let ComponenteDialogo;
let ComponenteTexto;

let botonIzquierdaInicio;
let botonDerechaInicio;
let botonIzquierdaCastillo;
let botonDerechaCastillo;
let botonIzquierdaLobby;

// Fondo
let videoFondoBosque;

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
let Jaula;
let usarFondoJaula = false;

let forestVideo;

let tieneLlave = false;

// Función que se ejecuta al inicio del programa
function setup() {
  // Crear el canvas donde se mostrará la animación
  // createCanvas(1300, 700);
  createCanvas(windowWidth, windowHeight);
  // forestVideo = createVideo("Assets/Sprites/videos/forest.mp4");

  // Cargar las imágenes que se utilizarán
  fondoBosque = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  Llave = loadImage("Assets/Sprites/key-option.jpeg");
  CastilloLejos = loadImage("Assets/Sprites/castle-away.jpeg");
  CastilloCerca = loadImage("Assets/Sprites/castle.jpeg");
  Lobby = loadImage("Assets/Sprites/Lobby.jpeg");
  Pasillo = loadImage("Assets/Sprites/hall.jpeg");
  Jaula = loadImage("Assets/Sprites/jail.jpeg");
  Escaleras = loadImage("Assets/Sprites/upstairs.jpeg");

  // videoFondoBosque = new CrearVideo(forestVideo);

  // Inicializar los botones de opciones, pero no mostrarlos aún
  botonIzquierdaInicio = new BotonInicio(
    introOpcionIzquierda,
    width / 2 - 200,
    height / 2,
    150,
    70,
    introPrimeraOpcion
  );
  botonDerechaInicio = new BotonInicio(
    introOpcionDerecha,
    width / 2 + 50,
    height / 2,
    150,
    70,
    introSegundaOpcion
  );
  botonIzquierdaCastillo = new BotonEntrada(
    opcionEntrarCastillo,
    width / 2 - 200,
    height / 2,
    150,
    70,
    entradaCastillo
  );
  botonDerechaCastillo = new BotonEntrada(
    opcionNoEntrarCastillo,
    width / 2 + 50,
    height / 2,
    150,
    70,
    noEntradaCastillo
  );
  botonIzquierdaLobby = new BotonLobby(
    lobbyOpcionIzquierda,
    width / 2 - 200,
    height / 2,
    150,
    70,
    lobbyPrimeraOpcion
  );
  botonDerechaLobby = new BotonLobby(
    lobbyOpcionDerecha,
    width / 2 + 50,
    height / 2,
    150,
    70,
    lobbySegundaOpcion
  );

  ComponenteDialogo = new Dialogo();
  ComponenteTexto = new Texto("");
}

// Función que se ejecuta en cada frame
function draw() {
  fondosInicio();
  fondosCastillo();

  if (opcionSeleccionadaLobby === lobbyPrimeraOpcion) {
    fondosPasillo();
  } else {
    fondosEscalera();
  }

  SegundaEscena();
  PrimeraEscena();
  TerceraEscena();

  updateOpacity();
}

// Función para establecer el segundo fondo
function fondosInicio() {
  if (usarFondoLlave) {
    background(Llave);
  } else if (contadorSeg < introPrimeraOpcion.length) {
    if (introPrimeraOpcion[contadorSeg] === "¿Qué es eso?") {
      usarFondoLlave = true;
      usarFondoOpciones = false;
    } else if (introduccion[contador] === "...") {
      background(0);
      // fondoBosque.show();
    } else {
      background(fondoBosque);
      // videoFondoBosque.show();
    }
    if (usarFondoOpciones) {
      background(fondoOpciones);
    } else if (contador < introduccion.length) {
      if (introduccion[contador] === "El camino se termina dividiendo en 2") {
        usarFondoOpciones = true;
      }
    }
  }
}

// Función fara establecer el tercer fondo

function fondosCastillo() {
  if (introPrimeraOpcion[contadorSeg] === "...") {
    background(0);
  }
  if (usarFondoCastillo) {
    background(CastilloLejos);
  } else if (introCastillo[contadorTer] === "Wow....") {
    background(CastilloLejos);
    usarFondoCastillo = true;
  }
  if (usarFondoCastilloCerca) {
    background(CastilloCerca);
  } else if (introCastillo[contadorTer] === "Raro que no haya nadie aquí") {
    usarFondoCastilloCerca = true;
  } else if (lobbyCastillo[contadorQuin] === "...") {
    usarFondoCastilloCerca = false;
    background(0);
  } else if (
    lobbyCastillo[contadorQuin] ===
    "Que ruidosas puerta...creo que hasta Rio de Janeiro se enteró que estoy aquí"
  ) {
    background(0);
  } else if (lobbyCastillo[contadorQuin] === "¿Por donde voy?") {
  }
  if (usarFondoLobby) {
    background(Lobby);
  } else if (lobbyCastillo[contadorQuin] === "Wow") {
    usarFondoLobby = true;
  } else if (noEntradaCastillo[contadorTer] === "JUEGO TERMINADO :D") {
    background(0);
    console.log("Termino el juego");
  }
}

function fondosPasillo() {
  if (UsarFondoOscuro) {
    background(0);
  } else if (lobbyPrimeraOpcion[contadorSext] === "Esto está feo") {
    usarFondoPasillo = false;
    UsarFondoOscuro = true;
  }
  if (usarFondoPasillo) {
    background(Pasillo);
  } else if (lobbyPrimeraOpcion[contadorSext] === "Oooooookey????") {
    usarFondoPasillo = true;
  }
  if (usarFondoJaula) {
    background(Jaula);
  } else if (lobbyPrimeraOpcion[contadorSext] === "¿S-S-SE...") {
    usarFondoJaula = true;
  }
}

function fondosEscalera() {
  if (usarFondoEscaleras) {
    background(Escaleras);
  } else if (lobbySegundaOpcion[contadorSext] === "¿Una escalera?") {
    usarFondoEscaleras = true;
    console.log("Funciona esta wea de las imagenes");
  }
  if (UsarFondoOscuro) {
    background(0);
  }
}
