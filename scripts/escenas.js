function PrimeraEscena() {
  let texto = "";
  if (contador < introduccion.length) {
    texto = introduccion[contador];
    MostrarComponentes();
    ComponenteTexto.setText(texto);
    botonIzquierdaInicio.hide();
    botonDerechaInicio.hide();
    botonIzquierdaLobby.hide();
    botonDerechaLobby.hide();
  } else if (opcionSeleccionada === null) {
    ComponenteDialogo.hide();
    ComponenteTexto.setText("");
    botonIzquierdaInicio.show();
    botonDerechaInicio.show();
  }
  if (opcionSeleccionada == introPrimeraOpcion) {
    if (contadorSeg < introPrimeraOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = introPrimeraOpcion[contadorSeg];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  } else if (opcionSeleccionada == introSegundaOpcion) {
    if (contadorSeg < introSegundaOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = introSegundaOpcion[contadorSeg];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaInicio.hide();
      botonDerechaInicio.hide();
    }
  }
}

function SegundaEscena() {
  texto = "";

  if (contadorTer < introCastillo.length) {
    texto = introCastillo[contadorTer];
    MostrarComponentes();
    ComponenteTexto.setText(texto);
    botonIzquierdaCastillo.hide();
    botonDerechaCastillo.hide();
  } else if (opcionSeleccionadaEntrada === null) {
    botonIzquierdaCastillo.show();
    botonDerechaCastillo.show();
    OcultarComponentes();
    ComponenteTexto.setText("");
  }
  if (opcionSeleccionadaEntrada == noEntradaCastillo) {
    if (contadorCuar < noEntradaCastillo.length) {
      ComponenteDialogo = new Dialogo();
      texto = noEntradaCastillo[contadorCuar];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  } else if (opcionSeleccionadaEntrada == entradaCastillo) {
    if (contadorCuar < entradaCastillo.length) {
      ComponenteDialogo = new Dialogo();
      texto = entradaCastillo[contadorCuar];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaCastillo.hide();
      botonDerechaCastillo.hide();
    }
  }
}

function TerceraEscena() {
  texto = "";
  if (contadorQuin < lobbyCastillo.length) {
    texto = lobbyCastillo[contadorQuin];
    MostrarComponentes();
    ComponenteTexto.setText(texto);
    botonIzquierdaLobby.hide();
  } else if (opcionSeleccionadaLobby == null) {
    botonIzquierdaLobby.show();
    botonDerechaLobby.show();
    OcultarComponentes();
    ComponenteTexto.setText("");
  }
  if (opcionSeleccionadaLobby == lobbyPrimeraOpcion) {
    if (contadorSext < lobbyPrimeraOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = lobbyPrimeraOpcion[contadorSext];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaLobby.hide();
      botonDerechaLobby.hide();
      if (lobbyPrimeraOpcion[contadorSext] === "¿Una escalera?") {
        usarFondoEscaleras = true;
        usarFondoPasillo = false;
      }
    }
  } else if (opcionSeleccionadaLobby == lobbySegundaOpcion) {
    if (contadorSext < lobbySegundaOpcion.length) {
      ComponenteDialogo = new Dialogo();
      texto = lobbySegundaOpcion[contadorSext];
      MostrarComponentes();
      ComponenteTexto.setText(texto);
      botonIzquierdaLobby.hide();
      botonDerechaLobby.hide();
    }
  }
}

function MostrarComponentes() {
  ComponenteDialogo.show();
  ComponenteTexto.show();
}

function OcultarComponentes() {
  ComponenteDialogo.hide();
}
