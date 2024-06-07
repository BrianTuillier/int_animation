#Personajes
define Og = Character("Ogro re contre re qliao feo", color="#75F010")

image option_key = "key-option.jpeg"

#Variable para la llave
default llave = False

#El juego arranca acá:
label start:
    #Declaramos la escena
    image bosque = "forest.jpeg"
    scene bosque
    #Transición:
    with fade

    #------Música------- (si tuvieramos que cargar las canciones, en vez de "play" es "queue")
    play music "audio/forest.ogg"
    #Diálogo voz interna del prota
    "Estuve divagando un buen rato por este bosque"
    "No encuentro ninguna salida"
    "Ni mucho menos ninguna pista de ese castillo"
    "Dios mío, ¿Por qué debí aceptar este trabajo? No creo que valga la pena arriesgar mi vida por esos 200 pesos que ofrecen de recompensa"
    "Pero bueno, no es que tenga otra cosa que hacer siendo honesto..."
    
    #Pantalla en negro
    scene black
    with fade
    "..."
    "Después de un buen rato caminando y caminando, encontré un camino marcado en el bosque"
    
    image opciones = "options.jpeg"
    scene opciones
    with fade

    "El camino se termina dividiendo en 2"

    #ELECCIONES
    "¿Qué camino debería tomar?"
    menu: 
        "Camino izquierdo":
            jump izquierda


        "Camino derecho":
            jump derecha
    
    label izquierda:
        "Me parece que el camino de la izquierda tiene mejor pinta"
        "No creo que sea muy importante de todos modos, ya estoy perdido de igual forma .-."
        scene black
        with fade
        "Oh, parece que hay algo de luz ahí"
        "¿Qué es eso?"
        scene option_key
        with fade
        "¿Qué hace una llave en este lugar?"
        "..."
        "Me la guardaré, creo que es mejor a que esté aquí"
        #Llave
        image key = "Key.png"
        show key at truecenter
        "Quién dice, capaz y sirve de algo"
        
        #Llave
        
        $ llave = True

        "Bueno, a seguir caminando"
        "hmm"
        "Pareciera que hay algo ahí al fondo"
        jump castillo
        
label derecha:
    "Por la derecha siempre"
    "Aguante Milei"
    jump castillo

image castleA = "castle-away.jpeg"
image cas = "castle.jpeg" 
image lobby = "lobby.jpeg"
image hall = "hall.jpeg"

label castillo:
    scene castleA
    with fade
    "AL FIN"
    "DIOS"
    "DESPUÉS DE TANTO"
    "Dios mío me duele todo"
    "Espero que esto valga la pena"
    scene cas
    with fade
    "Wow..."
    "Se ve incluso más grande desde aquí"
    "Raro que no haya nadie aquí"
    "Teniendo secuestrada a una princesa tan buscada ¿No deberían haber guardias o algo así?"
    "O tal vez soy yo el único que arriesgaría su vida por lo que vale un turron fulbito..."
    "Bueno, no importa, es la hora de la verdad"
    scene black
    with fade
    play sound "audio/principal_door.mp3"
    "..."
    "Que ruidosa puerta... creo que hasta Rio de Janeiro se enteró que estoy aquí"
    scene lobby
    with fade
    "Wow"
    "Mucha clase"
    "Okey, no importa. Tengo que encontrar a la princesa"
    "Mmm"
    "En las películas suelen estar en la parte más alta ¿Verdad?"
    "Entonces debo empezar a subir"
    "Espera, la escalera se divide en 2, y no parece que lleven a lo mismo"
    "¿Por dónde voy?"
    menu:
        "¿Por donde voy?"
        "Izquierda":
            "A ver qué onda"
            jump lobby_izquierda
            
        "Derecha":
            "A ver qué onda"
            jump lobby_derecha
        
label lobby_izquierda:
    scene black
    with fade
    stop music
    "..."
    "Esto está muy oscuro"
    "..."
    "..."
    "..."
    "Oh"
    "Esa zona está iluminada..."
    scene hall
    with fade
    play music "audio/hall.ogg"
    "Ooookey?"
    "¿Qué se supone que es este lugar?"
    "Me da escalofríos..."
    "Pareciera haber algo al fondo"
    "Debería ir" 
    "creo que no me queda de otra"
    "Si no, debería volver a estar a ciegas allá atrás..."
    "No... eso no terminará muy bien..."
    "Mejor me mando"
    scene black
    with dissolve

    ". . ."
    "Esto está feo"
    ". . ."
    "Me siento observado"
    "Muy observado diría yo"
    stop music
    play sound "audio/jaildoor.mp3"
    "!?"
    "¿Q-Q-Q-Q"
    "S-"
    "¿S-S-SE..." 
    "¿SE ACABA DE ABRIR UNA JAULA??????????"
    play music "audio/monster.mp3"
    "..."
    "No..."
    return
    

label lobby_derecha:
    "En desarrollo pai"
    return








