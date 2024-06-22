class Dialogo {
  constructor() {
    this.visible = true;
  }
  show() {
    if (this.visible) {
      fill(255, opacity); // Usar la opacidad para la animación
      // rect(310, 560, 800, 150, 5);
      rect(310, 560, 800, 150, 5);
    }
  }
  hide() {
    this.visible = false;
  }
}

class Texto {
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
    fill(0); // Usar la opacidad para la animación
    textSize(17);
    textStyle(BOLD);
    text(this.texts, this.x + padding, this.y + padding, this.w - padding * 2); // Agregar padding a los lados
  }
}

class CrearVideo {
  constructor(video) {
    this.video = video;
    this.visible = false;
    this.isPlaying = false;
  }

  show() {
    this.visible = true;
    this.video.show();
    this.startPlayback();
  }

  hide() {
    this.visible = false;
    this.video.hide();
    this.stopPlayback();
  }

  startPlayback() {
    this.video.play();
    this.isPlaying = true;
    this.video.onended(() => {
      this.restartPlayback();
    });
  }

  stopPlayback() {
    this.video.stop();
    this.isPlaying = false;
  }

  restartPlayback() {
    this.startPlayback();
  }

  draw() {
    if (this.visible) {
      background(this.video, 0, 0);
    }
  }
}

class BotonInicio {
  constructor(opcion, x, y, w, h, resultado) {
    this.opcion = opcion;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.resultado = resultado;
    this.button = createButton(this.opcion);
    this.button.position(this.x, this.y);
    this.button.size(this.w, this.h);
    this.button.mousePressed(() => this.seleccionarOpcion());
    this.button.mouseOver(() =>
      this.button.style("background-color", "rgba(200, 200, 200, 1.0)")
    );
    this.button.mouseOut(() =>
      this.button.style("background-color", "rgba(255,255,255, 1.0)")
    );
    this.button.style("font-weight", "bold");
    this.button.style("cursor", "pointer");
    this.button.style("border-radius", "6px");
    this.button.style("opacity", "0.9 ");
  }

  show() {
    this.button.show();
  }

  hide() {
    this.button.hide();
  }

  seleccionarOpcion() {
    opcionSeleccionada = this.resultado;
    opcionSeleccionada2 = this.resultado;
  }
}
