// Se declaran los Dialogos
// PRIMERA ESCENA
let introduccion = [
  "Estuve divagando un buen rato por este bosque",
  "No encuentro ninguna salida",
  "Ni mucho menos ninguna pista de ese castillo",
  "Dios mío, ¿Por qué debí aceptar este trabajo? No creo que valga tanto la pena arriesgar mi vida por 200 pesos que ofrecen de recompensa",
  "Pero bueno, no es que tenga otra cosa que hacer siendo honesto...",
  "...",
  "Después de un rato caminando y caminando, encontré un camino marcado en el bosque",
  "El camino se termina dividiendo en 2",
  "¿Qué camino debera tomar?",
];

let introOpcionIzquierda = "Seguir camino por la izquierda";
let introOpcionDerecha = "Seguir camino por la derecha";

let introPrimeraOpcion = [
  "Me parece que el camino de la izquierda tiene mejor pinta",
  "No creo que sea muy importante de todos modos, ya estoy perdido de igual forma .-.",
  "Oh, parece que hay algo de luz ahí",
  "¿Qué es eso?",
  "¿Qué hace una llave en este lugar?",
  "...",
  "Me la guardaré, creo que es mejor a que esté aquí",
  "Quién dice, capaz y sirve de algo",
];

let introSegundaOpcion = ["Por la derecha siempre", "Aguante millel"];

//sEGUNDA ESCENA
let introCastillo = [
  ".",
  "AL FIN",
  "DESPUÉS DE TANTO",
  "Espero que esto valga la pena",
  "Wow....",
  "Se ve incluso más grande desde aqui",
  "Raro que no haya nadie aquí",
  "Teniendo secuestrada a una princesa tan buscada ¿No deberían haber guardias o algo así?",
  "O tal vez soy el único que arriesgaría su vida por lo que vale un turron fulbito...",
];

let opcionEntrarCastillo = ["Entrar al castillo"];
let opcionNoEntrarCastillo = ["No entrar al castillo"];

let entradaCastillo = ["Bueno, no importa, es la hora de la verdad"];
let noEntradaCastillo = [
  "Naaa, ni empedo me mando",
  "ya fue, mira si me voy a meter aca por 2 mangos",
  "JUEGO TERMINADO :D",
];

let lobbyCastillo = [
  "mmm",
  "...",
  "Que ruidosas puerta...creo que hasta Rio de Janeiro se enteró que estoy aquí",
  "Wow",
  "Mucha clase",
  "Okey, no importa. Tengo que encontrar a la princesa",
  "Mmmm",
  "En las películas suelen estar en la parte más alta",
  "¿Verdad?",
  "Entonces debo empezar a subir",
  "Espera, la escalera se divide en 2 y no pareciera que lleven a lo mismo",
  "¿Por donde voy?",
];

let lobbyOpcionIzquierda = "A ver qué onda";
let lobbyOpcionDerecha = "Me mando por aca ya fue";

let lobbyPrimeraOpcion = [
  "...",
  "Oooooookey????",
  "¿Qué se supone que es este lugar?",
  "Me da escalofríos...",
  "Pareciera haber algo al fondo",
  "Debería ir",
  "Creo que no me queda la otra",
  "Si no, debería volver a estar a ciegas allá atrás...",
  "Mejor me mando",
  "Esto está feo",
  "Me siento observando",
  "Muy observado diría yo",
  "!?",
  "¿Q-Q-Q-Q?",
  "S-",
  "¿S-S-SE...",
  "¿¿¿¿¿SE ACABA DE ABRIR UNA JAULA?????",
];

let lobbySegundaOpcion = [
  "¿Mhm?",
  "¿Una escalera?",
  "Bueno, esto cumple con lo de 'suelen estar en la parte más alta', tiene sentido",
  "Toca subir (que paja)",
  "Ufffff",
  "Por fin",
  "Dios míoo por qué hay tantas escaleras...",
  "¿Quién diseñó esta mrd?",
  "Bueno, no importa ¿Qué rayos es esto?",
  "Una jaula",
  "Y me imagino que estará cerrada verdad?",
  "Seh",
  "Qué conveniente...",
  "Bueno ¿Qué hago ahora?",
];

let opcionNoLlave = [
  "Creo que no me queda otra que buscar otro camino",
  "Debería volver atrás, capaz el camino izquierdo tenga otra escalera",
  "¿Eh?",
  "¿Algo está subiendo las escaleras?",
  "EH??",
  "QUÉ",
  "QUÉ ES ESO",
  "Amiiiiiigo",
  "¿Sos feo a propósito o es natural?",
  "Hay que pedirlo",
  "...",
  "EH",
  "PARÁ ERA JODA BLDO",
  "NOOOOOO",
];

let opcionTieneLlave = [
  "AH",
  "CLARO",
  "LA LLAVE",
  "¿Servirá? Tiene pinta",
  "A ver...",
  "SÍ, FUNCIONÓ",
  "Sabía que serviría de algo",
  "Nostradamus un poroto",
  "Abro la puerta suavemente...",
  "dea",
  "...",
  "¿Será aquí?",
  "¿Eh?",
  "PRINCESA",
  "Dios",
  "Está inconsciente atada de manos y pies",
  "Que fea situación",
  "Una princesa no merece ser tratada de esta forma",
  "Pero hey, al menos la soga hace juego con el vestido",
  "Jajaja",
  "Nunca la voy a poner...",
  "¿Eh? ¿Y eso?",
  "¿Un cofre?",
  "Damn",
  "Que raro",
  "Puedo advertir a kilómetros de distancia que es una trampa anti-bobos",
  "Arriba dice algo",
  "Lástima que no sé leer",
  "Tengo que rescatar a la princesa",
  "Pero el cofre se ve taaaaaaaaaaaaaaan",
  "No sé",
  "Me mata la curiosidad",
  "¿Qué hago?",
];

let JaulaOpcionIzquierda = [
  "No...",
  "yo vine hasta aca para rescatar a la prinecsa",
  "no puedo dejarla aca asi nomas",
  "vamo princesa.",
];
let opcionSeleccionarPrincesa = [
  "Pensándolo bien",
  "El cofre no es taaaaaaaaaaaaaaaaaaaaaaaaaaaan mala idea",
  "Va, sí lo es",
  "Peeeeeeeeeeeeeeeeeeero",
  "Después de todo lo que pasé",
  "De los andá a saber cuántos días perdido en ese bosque",
  "Creo que me merezco una recompensa",
  "...que no sean los 200 pesos...",
  "y la falsa gratitud de una princesa",
  "Ya que, aparte",
  "La princesa en cuestión",
  "De milagro me dará las gracias",
  "Total",
  "Todas mienten",
];
