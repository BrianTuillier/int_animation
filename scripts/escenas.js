// Función para mostrar la escena
function mostrarEscenas() {
  let texto = "";

  if (contador < intro.length) {
    texto = intro[contador];
    dialogoFrame.show();
    textoFrame.setText(texto);
    textoFrame.show();
    botonIzquierda.hide();
    botonDerecha.hide();
  } else if (opcionSeleccionada === null) {
    dialogoFrame.hide();
    botonIzquierda.show();
    botonDerecha.show();
    textoFrame.setText("");
  }
  if (opcionSeleccionada == primeraOpcion) {
    dialogoFrame = new SeccionDialogo();
    if (contadorSeg < primeraOpcion.length) {
      texto = primeraOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierda.hide();
      botonDerecha.hide();
    }
  }
  if (opcionSeleccionada == segundaOpcion) {
    dialogoFrame = new SeccionDialogo();
    if (contadorSeg < segundaOpcion.length) {
      texto = segundaOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.setText(texto);
      textoFrame.show();
      botonIzquierda.hide();
      botonDerecha.hide();
    }
  }

  // Castillo
  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
    botonIzquierdaCastillo.hide();
    botonDerechaCastillo.hide();
  } else if (opcionSeleccionada === false) {
    dialogoFrame.hide();
    botonIzquierdaCastillo.show();
    botonDerechaCastillo.show();
    textoFrame.setText("");
    console.log("se estan mostrando los botones");
  }
  if (opcionSeleccionada == castilloOpcion) {
    dialogoFrame = new SeccionDialogo();
    if (contadorTer < castilloOpcion.length) {
      texto = castilloOpcion[contadorTer];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
  if (opcionSeleccionada == castilloOpcion2) {
    dialogoFrame = new SeccionDialogo();
    if (contadorTer < castilloOpcion2.length) {
      texto = castilloOpcion2[contadorTer];
      dialogoFrame.show();
      textoFrame.setText(texto);
      textoFrame.show();
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
}
