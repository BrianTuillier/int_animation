function PrimeraEscena() {
  let texto = "";
  if (contador < intro.length) {
    texto = intro[contador];
    ComponenteDialogo.show();
    ComponenteTexto.show();
    ComponenteTexto.setText(texto);
    botonIzquierdaInicio.hide();
    botonDerechaInicio.hide();
  } else if (opcionSeleccionada === null) {
    ComponenteDialogo.hide();
    botonIzquierdaInicio.show();
    botonDerechaInicio.show();
    ComponenteTexto.setText("");
  }
  // Mostrar opciones basadas en la opción seleccionada
  if (opcionSeleccionada == primeraOpcion) {
    if (contadorSeg < primeraOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = primeraOpcion[contadorSeg];
      ComponenteDialogo.show();
      ComponenteTexto.show();
      ComponenteTexto.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  } else if (opcionSeleccionada == segundaOpcion) {
    if (contadorSeg < segundaOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = segundaOpcion[contadorSeg];
      ComponenteDialogo.show();
      ComponenteTexto.show();
      ComponenteTexto.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  }
}

function SegundaEscena() {
  texto = "";

  // Mostrar intro del castillo o los botones según el valor del contador
  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    ComponenteDialogo.show();
    ComponenteTexto.show();
    ComponenteTexto.setText(texto);
    botonIzquierdaCastillo.hide();
    botonDerechaCastillo.hide();
  } else if (opcionSeleccionada2 === null) {
    botonIzquierdaCastillo.show();
    botonDerechaCastillo.show();
    ComponenteDialogo.hide();
    ComponenteTexto.setText("");
  } else if (opcionSeleccionada2 == noEntradaCastillo) {
    if (contadorCuar < noEntradaCastillo.length) {
      ComponenteDialogo = new Dialogo();
      texto = noEntradaCastillo[contadorCuar];
      ComponenteDialogo.show();
      ComponenteTexto.show();
      ComponenteTexto.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  } else if (opcionSeleccionada2 == entradaCastillo) {
    if (contadorCuar < entradaCastillo.length) {
      ComponenteDialogo = new Dialogo();
      texto = entradaCastillo[contadorCuar];
      ComponenteDialogo.show();
      ComponenteTexto.show();
      ComponenteTexto.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
}

function TerceraEscena() {
  texto = "";

  if (opcionSeleccionada3 == null) {
    botonIzquierdaLobby.show();
    ComponenteDialogo.hide();
    ComponenteTexto.setText("");
    console.log("Funciona mostrar el boton");
  } else if (opcionSeleccionada3 == opcionCastillo) {
    if (contadorQuin < opcionCastillo.length) {
      ComponenteDialogo = new Dialogo();
      texto = opcionCastillo[contadorQuin];
      ComponenteDialogo.show();
      ComponenteTexto.show();
      ComponenteTexto.setText(texto);
      botonIzquierdaLobby.hide();
      console.log("Funciona opcion lobby");
    }
  }
}
