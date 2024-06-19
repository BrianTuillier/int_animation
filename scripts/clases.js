// Clase para la sección de diálogo (rectángulo donde se muestra el texto)
class SeccionDialogo {
  constructor() {
    this.visible = true;
  }
  show() {
    if (this.visible) {
      fill(255, opacity); // Usar la opacidad para la animación
      rect(310, 560, 800, 150, 5);
    }
  }
  hide() {
    this.visible = false;
  }
}

// Clase para el texto del diálogo y su posición
class DialogoTexto {
  constructor(texts, x, y, w, h) {
    this.texts = texts;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  setText(texts) {
    this.texts = texts;
  }
  show() {
    fill(0, opacity); // Usar la opacidad para la animación
    textSize(17);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text(this.texts, this.x + padding, this.y + padding, this.w - padding * 2); // Agregar padding a los lados
  }
}

// Clase para los botones de opción
class BotonOpcionInicio {
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

    // Estilos del boton
    this.button.style("display", "inline-block"); // Muestra como bloque en línea
    this.button.style("text-align", "center"); // Alinea el texto al centro
    this.button.style("color", "black"); // Cambia el color del texto
    this.button.style("font-size", "16px"); // Cambia el tamaño de fuente
    this.button.style("font-weight", "bold"); // Aplica negrita al texto
    this.button.style("cursor", "pointer"); // Cambia el cursor al pasar sobre el botón
    this.button.style("border-radius", "6px"); // Añade bordes redondeados
    this.button.style("opacity", "0.9 "); // Aplica transparencia al botón (0.0 es completamente transparente, 1.0 es completamente opaco)
    this.button.style("background-color", "white"); // Cambia el color de fondo

    // Agregar efecto hover
    this.button.mouseOver(() =>
      this.button.style("background-color", "rgba(200, 200, 200, 1.0)")
    );
    this.button.mouseOut(() =>
      this.button.style("background-color", "rgba(255,255,255, 1.0)")
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
  }
}
class BotonOpcionSegundo {
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

    this.button.style("display", "inline-block");
    this.button.style("text-align", "center");
    this.button.style("color", "black");
    this.button.style("font-size", "16px");
    this.button.style("font-weight", "bold");
    this.button.style("cursor", "pointer");
    this.button.style("border-radius", "6px");
    this.button.style("opacity", "0.9");
    this.button.style("background-color", "white");

    this.button.mouseOver(() =>
      this.button.style("background-color", "rgba(200, 200, 200, 1.0)")
    );
    this.button.mouseOut(() =>
      this.button.style("background-color", "rgba(255,255,255, 1.0)")
    );
  }

  show() {
    this.button.show();
  }

  hide() {
    this.button.hide();
  }

  seleccionarOpcion() {
    opcionSeleccionada2 = this.resultado;
  }
}
class BotonOpcionTercero {
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

    this.button.style("display", "inline-block");
    this.button.style("text-align", "center");
    this.button.style("color", "black");
    this.button.style("font-size", "16px");
    this.button.style("font-weight", "bold");
    this.button.style("cursor", "pointer");
    this.button.style("border-radius", "6px");
    this.button.style("opacity", "0.9");
    this.button.style("background-color", "white");

    this.button.mouseOver(() =>
      this.button.style("background-color", "rgba(200, 200, 200, 1.0)")
    );
    this.button.mouseOut(() =>
      this.button.style("background-color", "rgba(255,255,255, 1.0)")
    );
  }

  show() {
    this.button.show();
  }

  hide() {
    this.button.hide();
  }

  seleccionarOpcion() {
    opcionSeleccionada3 = this.resultado;
  }
}

function mouseClicked() {
  avanzarIndiceConAnimacion();
}

// Función para avanzar el índice con un delay y animación
function avanzarIndiceConAnimacion() {
  if (!opacidadDes) {
    opacidadDes = true; // Inicia la animación de desaparición
  }
}

// Función para actualizar la opacidad en cada cuadro
function updateOpacity() {
  if (opacidadDes) {
    if (opacity > 0) {
      opacity -= cantidadOpacidad; // Reducir la opacidad para la animación de desaparición
    } else {
      opacidadDes = false;
      if (contador < intro.length) {
        contador++;
      } else if (
        opcionSeleccionada &&
        contadorSeg < opcionSeleccionada.length
      ) {
        contadorSeg++;
      } else if (contadorTer < introCastillo.length) {
        contadorTer++;
      } else if (
        opcionSeleccionada2 &&
        contadorCuar < opcionSeleccionada2.length
      ) {
        contadorCuar++;
      } else if (opcionSeleccionada3 && contadorQuin < opcionSeleccionada3) {
        contadorQuin++;
      }

      opacidadApa = true; // Iniciar la animación de aparición
    }
  } else if (opacidadApa) {
    if (opacity < 200) {
      opacity += cantidadOpacidad; // Aumentar la opacidad para la animación de aparición
    } else {
      opacidadApa = false; // Terminar la animación de aparición
    }
  }
}
