// Declaración de los diálogos
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

let primeraOpcion = [
  "Me parece que el camino de la izquierda tiene mejor pinta",
  "No creo que sea muy importante de todos modos, ya estoy perdido de igual forma .-.",
  "Oh, parece que hay algo de luz ahí",
  "¿Qué es eso?",
  "¿Qué hace una llave en este lugar?",
  "...",
  "Me la guardaré, creo que es mejor a que esté aquí",
  "Quién dice, capaz y sirve de algo",
];

let segundaOpcion = [
  "Te encuentras un misterioso camino lleno de luces",
  "ola",
];

// Variables de estado y control
let primerContador = 0;
let segundoContador = 0;
let opcionSeleccionada;
let opacidadDes = false;
let opacidadApa = true;
let cantidadOpacidad = 30;
let opacity = 255;

// Variables para los elementos de la interfaz
let dialogoFrame;
let textoFrame;
let botonIzquierda;
let botonDerecha;

// Imágenes de fondo
let fondo;
let fondoOpciones;
let usarFondoOpciones = false;

// Padding para el texto dentro del rectángulo de diálogo
let padding = 20;

function setup() {
  createCanvas(1366, 764);

  fondo = loadImage("Assets/Sprites/forest.jpeg");
  fondoOpciones = loadImage("Assets/Sprites/options.jpeg");
  fondeLlave = loadImage("Assets/Sprites/key-option.jpeg");

  dialogoFrame = new SeccionDialogo();
}

function draw() {
  if (usarFondoOpciones) {
    background(fondoOpciones);
  } else if (primerContador < intros.length) {
    if (intros[primerContador] === "El camino se termina dividiendo en 2") {
      background(fondoOpciones);
      usarFondoOpciones = true;
    } else if (intros[primerContador] === "...") {
      background(0); // Pantalla en negro
    } else {
      background(fondo);
    }
  } else {
    background(fondo);
  }

  updateOpacity();
  firstEscene();
}

function firstEscene() {
  botonIzquierda = new BotonOpcion(
    "Seguir camino por la izquierda",
    width / 2 - 200,
    height / 2,
    150,
    70,
    primeraOpcion
  );
  botonDerecha = new BotonOpcion(
    "Seguir camino por la derecha",
    width / 2 + 50,
    height / 2,
    150,
    70,
    segundaOpcion
  );

  if (primerContador < intros.length || opcionSeleccionada) {
    dialogoFrame.show();
  } else {
    dialogoFrame.hide();
  }

  let texto = "";

  if (primerContador < intros.length) {
    texto = intros[primerContador];
  } else if (opcionSeleccionada) {
    if (primerContador < primeraOpcion.length) {
      texto = primeraOpcion[primerContador];
    }
  }

  let lines = texto.split("\n");
  let maxLines = 4;

  if (lines.length > maxLines) {
    texto = lines.slice(0, maxLines).join("\n");
  }

  textoFrame = new DialogoTexto(texto, 330, 570, 760, 110);
  textoFrame.show();

  if (primerContador >= intros.length && !opcionSeleccionada) {
    botonIzquierda.show();
    botonDerecha.show();
    dialogoFrame.hide();
  } else {
    botonIzquierda.hide();
    botonDerecha.hide();
  }
}

function keyscene() {
  // Mostrar u ocultar la sección de diálogo según el estado
  if (index < izquierda.length || opcionSeleccionada) {
    dialogoFrame.show();
  } else {
    dialogoFrame.hide();
  }

  // Obtener el texto actual del diálogo
  let texto = "";

  if (index < izquierda.length) {
    texto = izquierda[index];
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

}

class SeccionDialogo {
  constructor() {
    this.visible = true;
  }

  show() {
    if (this.visible) {
      fill(255, opacity);
      rect(310, 560, 800, 150, 5);
    }
  }

  hide() {
    this.visible = false;
  }
}

class DialogoTexto {
  constructor(texts, x, y, w, h) {
    this.texts = texts;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(0, opacity);
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
    );
  }
}

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

    this.button.style("display", "inline-block");
    this.button.style("text-align", "center");
    this.button.style("font-size", "16px");
    this.button.style("font-weight", "bold");
    this.button.style("color", "black");
    this.button.style("cursor", "pointer");
    this.button.style("border-radius", "6px");
    this.button.style("border", "none");
    this.button.style("opacity", "2.0");
    this.button.style("background-color", "white");

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
    dialogoFrame.show();
    textoFrame.show();
  }
}

function avanzarIndiceConAnimacion() {
  if (opacidadDes && !opacidadApa) {
    // opacidadDes = true;
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
      if (primerContador < intros.length) {
        primerContador++; // Avanzar al siguiente texto
      } else if (opcionSeleccionada) {
        if (segundoContador < primeraOpcion.length) {
          segundoContador++;
        } else if (segundoContador < segundaOpcion.length) {
          segundoContador++;
        }
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
