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
      textoFrame.setText(texto);
      textoFrame.show();
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
  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    dialogoFrame.show();
    textoFrame.show();
    textoFrame.setText(texto);
  }
}
