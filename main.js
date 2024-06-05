// Se declaran las variables que contienen los diálogos
let intros = [
  "Estuve divagando un buen rato por este bosque",
  "No encuentro ninguna salida",
  "Ni mucho menos ninguna pista de ese castillo",
  "Dios mío, ¿Por qué debí aceptar este trabajo? No creo que valga tanto la pena arriesgar mi vida por 200 pesos que ofrecen de recompensa",
  "Pero bueno, no es que tenga otra cosa que hacer siendo honesto...",
  "...",
  "Después de un buen rato caminando y caminando, encontré un camino marcado en el bosque",
  "El camino se termina dividiendo en 2",
  "¿Qué camino debera tomar?",
];

let introOpcion = "Seguir camino por la izquierda";
let introOpcion2 = "Seguir camino por la derecha";

let primeraOpcion = "Te encuentras un objeto raro que podría ser útil";
let segundaOpcion = "Te encuentras un misterioso camino lleno de luces";

// Variables para controlar el estado de la animación de diálogo
let index = 0;
let opcionSeleccionada;
let opacidadDes = false; // Indica si se está realizando la animación de desaparición
let opacidadApa = true; // Indica si se está realizando la animación de aparición
let cantidadOpacidad = 30; // Controla la velocidad de la animación
let opacity = 255; // Controla la opacidad del cuadro de diálogo y el texto

// Variables para las clases que se utilizan
let dialogoFrame;
let textoFrame;
let botonIzquierda;
let botonDerecha;

// Variables para las imágenes de fondo
let fondo;
let fondoOpciones;

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

// Función que se ejecuta al inicio del programa
function setup() {
  // Crear el canvas donde se mostrará la animación
  createCanvas(1366, 764);

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
}

// Función que se ejecuta en cada frame
function draw() {
  // Establecer el fondo dependiendo del estado actual del diálogo
  if (index < intros.length && intros[index] !== "...") {
    background(fondo);
  } else if (intros[index] === "...") {
    background(0); // Pantalla en negro
  } else {
    background(fondo);
  }

  // Actualizar la opacidad para manejar las transiciones
  updateOpacity();
  // Dibujar la primera escena
  firstEscene();
}

// Función de la primera escena
function firstEscene() {
  // Mostrar u ocultar la sección de diálogo según el estado
  if (index < intros.length || opcionSeleccionada) {
    dialogoFrame.show();
  } else {
    dialogoFrame.hide();
  }

  // Obtener el texto actual del diálogo
  let texto = "";

  if (index < intros.length) {
    texto = intros[index];
  } else if (opcionSeleccionada) {
    texto = opcionSeleccionada;
  }

  // Dividir el texto en líneas y limitar el número de líneas a mostrar
  let lines = texto.split("\n");
  let maxLines = 4;

  if (lines.length > maxLines) {
    // Solo mostrar las primeras líneas que quepan en el cuadro de diálogo
    texto = lines.slice(0, maxLines).join("\n");
  }

  // Crear y mostrar el cuadro de texto del diálogo
  textoFrame = new DialogoTexto(texto, 330, 570, 760, 110);
  textoFrame.show();

  // Mostrar u ocultar los botones de opción según el estado
  if (index >= intros.length && !opcionSeleccionada) {
    botonIzquierda.show();
    botonDerecha.show();
    dialogoFrame.hide();
  } else {
    botonIzquierda.hide();
    botonDerecha.hide();
  }
}

// Clase para la sección de diálogo (rectángulo donde se muestra el texto)
class SeccionDialogo {
  constructor() {
    this.visible = true;
  }

  show() {
    if (this.visible) {
      fill(255, opacity); // Usar la opacidad para la animación
      rect(310, 560, 800, 150, 5);
    }
  }

  hide() {
    this.visible = false;
  }
}

// Clase para el texto del diálogo y su posición
class DialogoTexto {
  constructor(texts, x, y, w, h) {
    this.texts = texts;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(0, opacity); // Usar la opacidad para la animación
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
    ); // Agregar padding a los lados
  }
}

// Clase para los personajes (imágenes de los personajes)
class Personaje {
  constructor(img) {
    this.img = img;
  }

  show() {
    image(this.img, 300, 0);
  }
}

// Clase para los botones de opción
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

    this.button.style("display", "inline-block"); // Muestra como bloque en línea
    this.button.style("text-align", "center"); // Alinea el texto al centro
    this.button.style("font-size", "16px"); // Cambia el tamaño de fuente
    this.button.style("font-weight", "bold"); // Aplica negrita al texto
    this.button.style("color", "black"); // Cambia el color del texto
    this.button.style("cursor", "pointer"); // Cambia el cursor al pasar sobre el botón
    this.button.style("border-radius", "6px"); // Añade bordes redondeados
    this.button.style("border", "none"); // Remueve el borde
    this.button.style("opacity", "2.0"); // Aplica transparencia al botón (0.0 es completamente transparente, 1.0 es completamente opaco)
    this.button.style("background-color", "white"); // Cambia el color de fondo

    // Agregar efecto hover
    this.button.mouseOver(() =>
      this.button.style("background-color", "rgba(200, 200, 200, 2.0)")
    );
    this.button.mouseOut(() =>
      this.button.style("background-color", "rgba(255,255,255, 2.0)")
    );
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

// Función para avanzar el índice con un delay y animación
function avanzarIndiceConAnimacion() {
  if (!opacidadDes && !opacidadApa) {
    opacidadDes = true; // Inicia la animación de desaparición
  }
}

// Función para cambiar de texto cuando se clickee la pantalla
function mousePressed() {
  avanzarIndiceConAnimacion(); // Avanzar el índice con animación al hacer clic
}

// Función para actualizar la opacidad en cada cuadro
function updateOpacity() {
  if (opacidadDes) {
    if (opacity > 0) {
      opacity -= cantidadOpacidad; // Reducir la opacidad para la animación de desaparición
    } else {
      opacidadDes = false;
      if (index < intros.length) {
        index++; // Avanzar al siguiente texto
      } else if (opcionSeleccionada) {
        opcionSeleccionada = true;
      }
      opacidadApa = true; // Iniciar la animación de aparición
    }
  } else if (opacidadApa) {
    if (opacity < 255) {
      opacity += cantidadOpacidad; // Aumentar la opacidad para la animación de aparición
    } else {
      opacidadApa = false; // Terminar la animación de aparición
    }
  }
}
