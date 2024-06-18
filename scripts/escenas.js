function mostrarEscena() {
  let texto = "";
  // Mostrar intro o los botones según el valor del contador
  if (contador < intro.length) {
    texto = intro[contador];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
    botonIzquierda.hide();
    botonDerecha.hide();
  } else if (opcionSeleccionada === null) {
    dialogoFrame.hide();
    botonIzquierda.show();
    botonDerecha.show();
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
      botonIzquierda.hide();
      botonDerecha.hide();
    }
  } else if (opcionSeleccionada == segundaOpcion) {
    if (contadorSeg < segundaOpcion.length) {
      dialogoFrame = new SeccionDialogo();
      texto = segundaOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierda.hide();
      botonDerecha.hide();
    }
  }
}

function mostrarEscenaCastillo() {
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
  }

  // Mostrar opciones del castillo basadas en la opción seleccionada
  if (opcionSeleccionada2 == opcionCastillo) {
    if (contadorCuar < opcionCastillo.length) {
      dialogoFrame = new SeccionDialogo();
      texto = opcionCastillo[contadorCuar];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  } else if (opcionSeleccionada2 == opcionCastillo2) {
    if (contadorCuar < opcionCastillo2.length) {
      dialogoFrame = new SeccionDialogo();
      texto = opcionCastillo2[contadorCuar];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
}
