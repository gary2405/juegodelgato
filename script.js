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

let tablero = document.getElementById("contenedorPr");
let cuadros = document.getElementsByClassName("cuadro")
let jugadores = ["✦", "✺"];
let mensaje = document.querySelector("#mensajeGanador");
let jugadorActual = jugadores[0]; //Primer jugador (✦)
let cuadrosVacios = [];

for (let index = 0; index < cuadros.length; index++) {
    cuadros[index].addEventListener("click", () => {

    if (cuadros[index].innerHTML == "" && jugadorActual == jugadores[0]) {//solo permite al jugador (yo) haga su tiro
        cuadros[index].innerHTML =jugadorActual; //pondrá ✦ del primer jugador cuando presione un cuadro
    }
    if (verSiGana(jugadorActual)) {
        mensaje.textContent = jugadorActual + "ha ganado";
        return
    }
    else if (verEmpate()) {
        mensaje.textContent = "Empate";
        return;
    }
    cambioDeTurno()
    setTimeout(jugadaCompu, 800); // el tiempo que durará la computadora al hacer su tiro
    })
    
}

function cambioDeTurno() {
    
}
