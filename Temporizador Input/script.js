let milisegundos;
let segundos;
let minutos;
let cronometro;




function start() {
    milisegundos = document.getElementById("inputMilesimos").value;
    segundos = document.getElementById("inputSegundos").value;
    minutos = document.getElementById("inputMinutos").value;
    if(segundos > 59){
        let sobraSegundos = segundos / 60;
        minutos += sobraSegundos.toFixed(0)
        segundos -= sobraSegundos.toFixed(0) * 59
    }
    if(milisegundos > 999){
        let sobraMilisegundos = milisegundos / 1000;
        segundos += sobraMilisegundos.toFixed(0)
        milisegundos -= sobraMilisegundos.toFixed(0) * 1000
    }
    cronometro = setInterval(() => {
        timer()
    }, 10);
}

function timer() {
    if (milisegundos == 0) {
        segundos--;
        milisegundos = 1000
        if (segundos == 0 && minutos > 1) {
            minutos--;
            segundos = 59
        }
    }
    milisegundos -= 10;
    if (minutos <= 0 && segundos <= 0 && milisegundos <= 0) {
        stop()
        milisegundos = 0;
        segundos = 0;
        minutos = 0;
    }
    document.querySelector("#milisegundos").innerHTML = (milisegundos)
    document.querySelector("#segundos").innerHTML = (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector("#minutos").innerHTML = (minutos < 10 ? '0' + minutos : minutos) + ":"
}

function stop() {
    clearInterval(cronometro);
}

function reset() {
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    document.querySelector("#milisegundos").innerHTML = (milisegundos)
    document.querySelector("#segundos").innerHTML = (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector("#minutos").innerHTML = (minutos < 10 ? '0' + minutos : minutos) + ":"
}