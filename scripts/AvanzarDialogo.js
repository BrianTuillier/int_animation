let opacidadDes = false;
let opacidadApa = true;
let cantidadOpacidad = 30; // Controla la velocidad de la animación

let opacity = 200; // Controla la opacidad del cuadro de diálogo y el texto
let contador = 0;
let contadorSeg = 0;
let contadorTer = 0;
let contadorCuar = 0;
let contadorQuin = 0;
let contadorSext = 0;
let contadorSept = 0;

let opcionSeleccionada = null;
let opcionSeleccionadaEntrada = null;
let opcionSeleccionadaLobby = null;

function mouseClicked() {
  avanzarDialogoConAnimacion();
}

function avanzarDialogoConAnimacion() {
  if (!opacidadDes) {
    opacidadDes = true;
  }
}

function updateOpacity() {
  if (opacidadDes) {
    if (opacity > 0) {
      opacity -= cantidadOpacidad;
    } else {
      opacidadDes = false;
      opacidadApa = true;
      AvanzarDialogo();
    }
  } else if (opacidadApa) {
    if (opacity < 200) {
      opacity += cantidadOpacidad;
    } else {
      opacidadApa = false;
    }
  }
}

function AvanzarDialogo() {
  if (contador < introduccion.length) {
    contador++;
  } else if (opcionSeleccionada && contadorSeg < opcionSeleccionada.length) {
    contadorSeg++;
  } else if (contadorTer < introCastillo.length) {
    contadorTer++;
  } else if (
    opcionSeleccionadaEntrada &&
    contadorCuar < opcionSeleccionadaEntrada.length
  ) {
    contadorCuar++;
  } else if (contadorQuin < lobbyCastillo.length) {
    contadorQuin++;
  } else if (
    opcionSeleccionadaLobby &&
    contadorSext < opcionSeleccionadaLobby.length
  ) {
    contadorSext++;
  }
}
