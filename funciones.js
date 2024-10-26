function startCountdown() {
    window.stopCode = 7531; // Definir stopCode como una variable global
    var minsTimer = prompt("Introduce los minutos del temporizador:");
    alert("El temporizador se establecerá en " + minsTimer + " minutos. \nHaz clic en Aceptar para comenzar.");

    document.getElementById('out-boton-start').style.display = 'none'
    document.getElementById('temporizador').style.display = 'block'

    var count = minsTimer * 60 + 1;

    window.timer = setInterval(function() {
        count--;
        var minutes = Math.floor(count / 60);
        var seconds = count % 60;

        var countdown = document.getElementById('countdown');
        countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (count === minsTimer * 60) {
            playCountdownSound(); // Reproducir el sonido cuando el temporizador comienza.
        }

        if (count === minsTimer * 60 - 10) {
            stopCountdownSound(); // Detener el sonido cuando quedan 10 segundos.
        }

        if (count === 10) {
            playCountdownSound(); // Reproducir el sonido cuando quedan 10 segundos.
        }

        if (count === 0) {
            clearInterval(timer);
            var message = document.getElementById('message');
            message.classList.remove('d-none');
            stopCountdownSound();
        }
    }, 1000);
}

var message = document.getElementById('message');
var stopMessage = document.getElementById('stop-message');
var wrongCodeMessage = document.getElementById('wrong-code-message');
var codeInput = document.getElementById('codeInput');

document.getElementById('countdownAudio').load();

var timer = setInterval(function() {
    count--;
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;

    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (count === minsTimer * 60) {
        playCountdownSound(); // Reproducir el sonido cuando el contador empieza.
        console.log("El pitido debería sonar");
    }

    if (count === minsTimer * 60 - 10) {
        stopCountdownSound(); // Detener el sonido cuando el contador lleva 10 segundos
        console.log("El pitido debería parar");
    }

    if (count === 10) {
        playCountdownSound(); // Reproducir el sonido cuando el contador llega a 10 segundos
        console.log("El pitido debería sonar");
    }

    if (count === 0) {
        clearInterval(timer);
        message.classList.remove('d-none');
        stopCountdownSound();
        console.log("El pitido debería parar");
    }
}, 1000);

function playCountdownSound() {
    var audio = document.getElementById('countdownAudio');
    audio.playbackRate = 0.4; // Cambia este valor para ajustar la velocidad (0.5 es la mitad de la velocidad normal)
    audio.play();
}

function stopCountdownSound() {
    var audio = document.getElementById('countdownAudio');
    audio.pause();
}

document.getElementById('countdownAudio').addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});

function stopCountdown() {
    var userInput = codeInput.value.trim();
    if (userInput === window.stopCode.toString()) {
        clearInterval(timer);
        stopMessage.classList.remove('d-none');
        stopCountdownSound();
        console.log("DEBERÍA PARARSE");
    } else {
        wrongCodeMessage.classList.remove('d-none');
        setTimeout(function() {
            wrongCodeMessage.classList.add('d-none');
        }, 1800); // Ocultar mensaje después de 3 segundos
    }
}