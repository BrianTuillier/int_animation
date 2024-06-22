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

let forestVideo;

let tieneLlave = false;

// Función que se ejecuta al inicio del programa
function setup() {
  // Crear el canvas donde se mostrará la animación
  createCanvas(1300, 700);

  forestVideo = createVideo("Assets/Sprites/videos/forest.mp4");

  // Cargar las imágenes que se utilizarán
  fondoBosque = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  Llave = loadImage("Assets/Sprites/key-option.jpeg");
  CastilloLejos = loadImage("Assets/Sprites/castle-away.jpeg");
  CastilloCerca = loadImage("Assets/Sprites/castle.jpeg");
  Lobby = loadImage("Assets/Sprites/Lobby.jpeg");
  Pasillo = loadImage("Assets/Sprites/hall.jpeg");
  Escaleras = loadImage("Assets/Sprites/upstairs.jpeg");

  // videoFondoBosque = new CrearVideo(forestVideo);

  // Inicializar los botones de opciones, pero no mostrarlos aún
  botonIzquierdaInicio = new BotonInicio(
    introOpcion,
    width / 2 - 200,
    height / 2,
    150,
    70,
    primeraOpcion
  );
  botonDerechaInicio = new BotonInicio(
    introOpcion2,
    width / 2 + 50,
    height / 2,
    150,
    70,
    segundaOpcion
  );
  botonIzquierdaCastillo = new BotonInicio(
    opcionEntrarCastillo,
    width / 2 - 200,
    height / 2,
    150,
    70,
    entradaCastillo
  );
  botonDerechaCastillo = new BotonInicio(
    opcionNoEntrarCastillo,
    width / 2 + 50,
    height / 2,
    150,
    70,
    noEntradaCastillo
  );
  // botonIzquierdaLobby = new BotonOpcionTercero(
  //   castilloOpcion,
  //   width / 2 - 200,
  //   height / 2,
  //   150,
  //   70,
  //   opcionCastillo
  // );

  ComponenteDialogo = new Dialogo();
  ComponenteTexto = new Texto("", 330, 570, 760, 110);
}

// Función que se ejecuta en cada frame
function draw() {
  fondosInicio();
  fondosCastillo();

  PrimeraEscena();
  SegundaEscena();

  updateOpacity();
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
      console.log("Se deberia ejecutar");
      background(0);
      // fondoBosque.show();
    } else {
      background(fondoBosque);
      // videoFondoBosque.show();
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
