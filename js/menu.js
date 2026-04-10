const cardLancar = document.getElementById("cardLancar");
const modal = document.getElementById("modalEscolha");

const irPagina = document.getElementById("irPagina");
const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");

// abre modal de escolha
cardLancar.addEventListener("click", () => {
    modal.classList.add("show");
});

// ir para página normal
irPagina.addEventListener("click", () => {
    window.location.href = "TelaRegistro.html";
});

// abrir como modal (vamos fazer agora)
abrirModal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.getElementById("modalRegistro").classList.add("show");
});

// fechar escolha
fecharModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

document.getElementById("cardConsultar").addEventListener("click", function() {
    window.location.href = "ConsultarHoras.html";
});

const fecharRegistro = document.getElementById("fecharRegistro");

fecharRegistro.addEventListener("click", () => {
    document.getElementById("modalRegistro").classList.remove("show");
});