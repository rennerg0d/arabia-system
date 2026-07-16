// ==========================
// TELA DE BOOT
// ==========================

const bootText = document.getElementById("bootText");
const progressBar = document.getElementById("progressBar");

const linhas = [
    "Loading Arabia System...",
    "Checking Secure Modules...",
    "Initializing Interface...",
    "Connecting...",
    "Synchronizing Data...",
    "Access Authorized."
];

let i = 0;

function bootSequence() {

    if (i < linhas.length) {

        bootText.innerHTML += linhas[i] + "<br>";

        progressBar.style.width = ((i + 1) / linhas.length * 100) + "%";

        i++;

        setTimeout(bootSequence, 700);

    } else {

        setTimeout(() => {

            document.getElementById("bootScreen").classList.add("hidden");
            document.getElementById("loginScreen").classList.remove("hidden");

        }, 1000);

    }

}

window.onload = bootSequence;


// ==========================
// LOGIN
// ==========================

function login() {

    let usuario = document.getElementById("username").value;
    let senha = document.getElementById("password").value;

    if (usuario === "ARABIANOS" && senha === "ARABIANOS") {

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("tablet").classList.remove("hidden");


// INICIA MÚSICA DO TABLET
        const music = document.getElementById("backgroundMusic");

        music.volume = 0.3;

        music.play();


    } else {

        document.getElementById("loginMessage").innerHTML =
            "Usuário ou senha incorretos.";

    }

}


// ==========================
// ABAS
// ==========================

function openTab(nome) {

    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });

    document.getElementById(nome).classList.add("active");

}


// ==========================
// RELÓGIO
// ==========================

function atualizarRelogio() {

    const agora = new Date();

    document.getElementById("clock").innerHTML =
        agora.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        agora.toLocaleDateString();

}

setInterval(atualizarRelogio, 1000);


// ==========================
// MURAL
// ==========================

function saveMural() {

    const texto = document.getElementById("muralInput").value;

    localStorage.setItem("arabiaMural", texto);

    carregarMural();

}

function carregarMural() {

    const texto = localStorage.getItem("arabiaMural");

    if (texto) {

        document.getElementById("muralContent").innerHTML = texto;

        document.getElementById("muralInput").value = texto;

    }

}

carregarMural();