// Esta parte del js muestra por pantalla la hora actual
const hora_actual = document.getElementById("hora_actual");

function actualizarHora() {
    const hora = new Date();
    hora_actual.textContent= hora.toLocaleTimeString();
}

setInterval(actualizarHora, 1000);
actualizarHora();

// Esta parte del js es en la que aparecen las alarmas activas
const alarmas_activas = document.getElementById("texto_alarmas--activas");

let alarmas = [];