const hora_actual = document.getElementById("hora_actual");

function actualizarHora() {
    const hora = new Date();
    hora_actual.textContent= hora.toLocaleTimeString();
}

setInterval(actualizarHora, 1000);
actualizarHora();