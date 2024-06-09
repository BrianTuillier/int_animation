// Función para mostrar la escena
function primeraEscena() {
  let texto = "";

  if (contador < intros.length) {
    texto = intros[contador];
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
    if (contadorSeg < primeraOpcion.length) {
      texto = primeraOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
    }
  }
  if (opcionSeleccionada == segundaOpcion) {
    if (contadorSeg < primeraOpcion.length) {
      texto = segundaOpcion[contadorSeg];
      dialogoFrame.show();
      textoFrame.show();
      textoFrame.setText(texto);
    }
  }
}
