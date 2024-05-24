const matriz = [ // Posibilidades de ganar
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let tablero = document.getElementById('contenedorPr'); //contenedor principal tablero
let cuadros = document.getElementsByClassName('cuadro'); //todos los cuadros
let jugadores = ["✦", "✺"]; //los dos jugadores
let mensaje = document.querySelector("#mensajeGanador");
let jugadorActual = jugadores[0]; // Primer jugador (✦)

for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].addEventListener('click', () => {
        if (cuadros[index].innerHTML == "" && jugadorActual == jugadores[0]) { //solo permite al jugador (yo) haga su tiro
            cuadros[index].innerHTML = jugadorActual; //pondrá ✦ del primer jugador cuando presione un cuadro
            if (verSiGana(jugadorActual)) {//si el jugador actual ha ganado 
                mensaje.textContent = "Ha ganado " + jugadorActual; //mostrara mensaje de quien ganó
                return; // termina funcion caundo haya un ganador o empate
            } else if (verEmpate()) { //si hay empate
                mensaje.textContent = "Empate"; //mostrará mensaje de empate
                return;
            }
            cambioDeTurno();
            setTimeout(jugadaCompu, 800); // el tiempo que durará la computadora al hacer su tiro
        }
    });
    
}
function cambioDeTurno() { //funcion para cambiar el turno de jugador
    jugadorActual = (jugadorActual == jugadores[0]) ? jugadores[1] : jugadores[0];
 if (jugadorActual === jugadores[0]) {
    mensaje.textContent = "Turno de ✦"
 }else {
    mensaje.textContent = "Turno de ✺"
 }

}
    
    

function verSiGana(jugadorActual) { //funcion para ver si algun jugador ganó
    for (let index = 0; index < matriz.length; index++) {
        const [c1, c2, c3] = matriz[index]; // c1 c2 c3 representan los tres cuadros que ganan
        if (cuadros[c1].textContent == jugadorActual && cuadros[c2].textContent == jugadorActual && cuadros[c3].textContent == jugadorActual) {
            return true; //retorna true si los tres cuadros tienen el mismo elemento
        }
        
    }
    return false;
}
function verEmpate() { //funcion pra ver si los jugadores terminaron empatados
    for (let index = 0; index < cuadros.length; index++) {
        if (cuadros[index].textContent == "") {
            return false; // Si hay un cuadro vacío no h empate
        }
    }
    return true; //true si todos los cuadros esta llenos
}
function jugadaCompu() { //turno de la computadora
    let cuadrosVacios = [] //guarada posicion de cuadros vacios
    for (let index = 0; index < cuadros.length; index++) {
        //para saber si el cuadro actual estara vacio
        if (cuadros[index].textContent == "") {
            cuadrosVacios.push(index);
        }

        //comprueba si hay cuadros disponibles
    }if (cuadrosVacios.length > 0) {
        let cuadroAlAzar = Math.floor(Math.random() * cuadrosVacios.length); //elegirá una posicion random de array cuadrosVacios
        let cuadroEscogido = cuadrosVacios[cuadroAlAzar]; //variable que tiene la posicion de del cuadro escogido
        cuadros[cuadroEscogido].innerHTML = jugadorActual; //pondra el simbolo en el cuadro escogido del jugador
        cambioDeTurno();
    }
   
}
