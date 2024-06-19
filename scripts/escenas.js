function mostrarEscena() {
  let texto = "";
  // Mostrar intro o los botones según el valor del contador
  if (contador < intro.length) {
    texto = intro[contador];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
    botonIzquierdaInicio.hide();
    botonDerechaInicio.hide();
    botonIzquierdaLobby.hide();
  } else if (opcionSeleccionada === null) {
    dialogoFrame.hide();
    botonIzquierdaInicio.show();
    botonDerechaInicio.show();

    textoFrame.setText("");
  }
  // Mostrar opciones basadas en la opción seleccionada
  if (opcionSeleccionada == primeraOpcion) {
    if (contadorSeg < primeraOpcion.length) {
      dialogoFrame = new SeccionDialogo();
      texto = primeraOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  } else if (opcionSeleccionada == segundaOpcion) {
    if (contadorSeg < segundaOpcion.length) {
      dialogoFrame = new SeccionDialogo();
      texto = segundaOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  }
}

function mostrarEscenaEntrarCastillo() {
  texto = "";

  // Mostrar intro del castillo o los botones según el valor del contador
  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
    botonIzquierdaCastillo.hide();
    botonDerechaCastillo.hide();
  } else if (opcionSeleccionada2 === null) {
    botonIzquierdaCastillo.show();
    botonDerechaCastillo.show();
    dialogoFrame.hide();
    textoFrame.setText("");
  } else if (opcionSeleccionada2 == noEntradaCastillo) {
    if (contadorCuar < noEntradaCastillo.length) {
      dialogoFrame = new SeccionDialogo();
      texto = noEntradaCastillo[contadorCuar];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  } else if (opcionSeleccionada2 == entradaCastillo) {
    if (contadorCuar < entradaCastillo.length) {
      dialogoFrame = new SeccionDialogo();
      texto = entradaCastillo[contadorCuar];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    } else if (opcionSeleccionada3 == null) {
      botonIzquierdaLobby.hide();
      dialogoFrame.hide();
      textoFrame.setText("");
    }
  } else if (opcionSeleccionada3 == opcionCastillo) {
    if (contadorQuin < opcionCastillo.length) {
      dialogoFrame = new SeccionDialogo();
      texto = opcionCastillo[contadorQuin];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaLobby.show();
      console.log("Funciona opcion lobby");
    }
  }
}

// if (opcionSeleccionada === primeraOpcion) {
// tieneLlave = true;
// } else {
// tieneLlave = false;
// }
// if (tieneLlave == true) {
// if (contadorQuin < opcionTieneLlave.length) {
// dialogoFrame = new SeccionDialogo();
// texto = opcionTieneLlave[contadorQuin];
// dialogoFrame.show();
// textoFrame.show();
// textoFrame.setText(texto);
// console.log("Esta wea funciona");
// } else if (contadorQuin < opcionNoLlave.length) {
// dialogoFrame = new SeccionDialogo();
// texto = opcionNoLlave[contadorQuin];
// dialogoFrame.show();
// textoFrame.show();
// textoFrame.setText(texto);
// console.log("Esta wea funciona 2");
// }
// }
