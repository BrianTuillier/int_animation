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

function mostrarEscena2() {
  texto = "";

  // Mostrar intro del castillo o los botones según el valor del contador
  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
    botonIzquierdaCastillo.hide();
    botonDerechaCastillo.hide();
  } else if (opcionSeleccionada === null) {
    dialogoFrame.hide();
    botonIzquierdaCastillo.show();
    botonDerechaCastillo.show();
    textoFrame.setText("");
    console.log("opcion nula ejecutandose");
  }

  // Mostrar opciones del castillo basadas en la opción seleccionada
  if (opcionSeleccionada === castilloOpcion) {
    if (contadorCuar < castilloOpcion.length) {
      texto = castilloOpcion[contadorCuar];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonDerechaCastillo.hide();
      botonIzquierdaCastillo.hide();
    }
  } else if (opcionSeleccionada == castilloOpcion2) {
    if (contadorCuar < castilloOpcion2.length) {
      texto = castilloOpcion2[contadorCuar];
      dialogoFrame.show();
      textoFrame.setText(texto);
      textoFrame.show();
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
}
