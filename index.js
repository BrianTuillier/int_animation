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
let Dormitorio;
let usarFondoDormitorio = false;

let Ogro;
let usarPersonajeOgro = false;
let usarPersonajeOgroCerca = false;
let Fantasma;
let usarPersonajeFantasma = false;
let ItemLlave;
let usarFondoItemLlave = false;
let Princesa;
let usarPersonajePrincesa = false;
let Cofre;
let usarItemCofre = false;

let tieneLlave = false;

let gameOver;
let usarFondoGameOver;

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
  Dormitorio = loadImage("Assets/Sprites/room-princess.jpg");

  Ogro = loadImage("Assets/Sprites/ogro.png");
  Fantasma = loadImage("Assets/Sprites/ghost.png");
  ItemLlave = loadImage("Assets/Sprites/Key.png");
  Princesa = loadImage("Assets/Sprites/princess.png");
  Cofre = loadImage("Assets/Sprites/quest.jpg");

  gameOver = loadImage("Assets/Sprites/game-over.jpg");
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
  botonIzquierdaDormitorio = new BotonDormitorio(
    dormitorioOpcionIzquierda,
    width / 2 - 200,
    height / 2,
    150,
    70,
    dormitorioPrimeraOpcion
  );
  botonDerechaDormitorio = new BotonDormitorio(
    dormitorioOpcionDerecha,
    width / 2 + 50,
    height / 2,
    150,
    70,
    dormitorioSegundaOpcion
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

  if (tieneLlave == true) {
    fondosTieneLlave();
  } else {
    fondosNoTieneLlave();
  }

  fondosDormitorioPrincesa();
  fondosDormitorioCofre();

  SegundaEscena();
  PrimeraEscena();
  TerceraEscena();

  updateOpacity();
}

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
  if (usarPersonajeFantasma) {
    image(Fantasma, windowWidth / 2 - 200, 100, 400, 400);
  } else if (lobbyPrimeraOpcion[contadorSext] === "¿¿QUE ES ESO??") {
    usarPersonajeFantasma = true;
  }
}

function fondosEscalera() {
  if (usarFondoEscaleras) {
    background(Escaleras);
  } else if (lobbySegundaOpcion[contadorSext] === "¿Una escalera?") {
    usarFondoEscaleras = true;
  }
}

function fondosTieneLlave() {
  if (usarFondoItemLlave) {
    image(ItemLlave, windowWidth / 2 - 200, 100);
  } else if (opcionTieneLlave[contadorSept] === "¿Servirá? Tiene pinta") {
    usarFondoItemLlave = true;
  }
  if (UsarFondoOscuro) {
    background(0);
  } else if (opcionTieneLlave[contadorSept] === "A ver...") {
    UsarFondoOscuro = true;
    usarFondoItemLlave = false;
  }
  if (usarFondoDormitorio) {
    background(Dormitorio);
  } else if (opcionTieneLlave[contadorSept] === "¿Eh?") {
    usarFondoDormitorio = true;
  }
  if (usarPersonajePrincesa) {
    image(Princesa, windowWidth / 2 - 250, 200);
  } else if (opcionTieneLlave[contadorSept] === "PRINCESA") {
    usarPersonajePrincesa = true;
  }
}

function fondosNoTieneLlave() {
  if (usarPersonajeOgro) {
    image(Ogro, windowWidth / 2 - 350, 100);
  } else if (opcionNoLlave[contadorSept] === "QUÉ ES ESO") {
    usarPersonajeOgro = true;
  }
  if (usarPersonajeOgroCerca) {
    image(Ogro, windowWidth / 2 - 600, 100, 1000, 1000);
  }
  if (opcionNoLlave[contadorSept] === "EH") {
    usarPersonajeOgro = false;
    usarPersonajeOgroCerca = true;
  }
  if (usarFondoGameOver) {
    background(gameOver);
  } else if (opcionNoLlave[contadorSept] === "NOOOOOO") {
    OcultarComponentes();
    ComponenteTexto.setText("");
    usarFondoGameOver = true;
    //Final malo Escalera
  } else if (noEntradaCastillo[contadorCuar] === "JUEGO TERMINADO :D") {
    OcultarComponentes();
    ComponenteTexto.setText("");
    usarFondoGameOver = true;
    // Final alternativo
  } else if (lobbyPrimeraOpcion[contadorSext] === "AYUDAAAAAAAAAAAA") {
    OcultarComponentes();
    ComponenteTexto.setText("");
    usarFondoGameOver = true;
    //Final malo pasillo
  }
}

function fondosDormitorioPrincesa() {
  if (usarItemCofre) {
    background(Cofre);
  } else if (opcionTieneLlave[contadorSept] === "¿Un cofre?") {
    usarItemCofre = true;
    usarPersonajePrincesa = false;
  }

  if (usarPersonajePrincesa) {
    image(Princesa, windowWidth / 2 - 250, 200);
  }
  if (
    dormitorioPrimeraOpcion[contadorOct] ===
    "yo vine hasta aca para rescatar a la prinecsa"
  ) {
    usarItemCofre = false;
    usarFondoDormitorio = true;
    usarPersonajePrincesa = true;
  }
  if (usarFondoGameOver) {
    background(gameOver);
  } else if (dormitorioPrimeraOpcion[contadorOct] === "vamo princesa.") {
    usarPersonajePrincesa = false;
    usarFondoGameOver = true;
  }
}
function fondosDormitorioCofre() {
  if (opcionSeleccionadaDormitorio === dormitorioSegundaOpcion) {
    if (usarItemCofre) {
      background(Cofre);
    }
    usarPersonajePrincesa = false;
    usarFondoGameOver = false;
    usarItemCofre = true;
  }
  if (usarFondoGameOver) {
    background(gameOver);
  } else if (dormitorioSegundaOpcion[contadorOct] === "Todas mienten") {
    usarItemCofre = false;
    usarFondoGameOver = true;
    console.log("Final todas mienten");
  }
}
