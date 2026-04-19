function animarNumero(elemento, valorFinal, sufixo = "", duracao = 1500) {
  let inicio = 0;
  const incremento = valorFinal / (duracao / 16);

  const timer = setInterval(() => {
    inicio += incremento;

    if (inicio >= valorFinal) {
      inicio = valorFinal;
      clearInterval(timer);
    }

    elemento.innerText = Math.floor(inicio) + sufixo;
  }, 16);
}


function atualizarTela(dados) {
  const horas = dados.horas || 0;
  const projetos = dados.projetos || 0;
  const meta = dados.meta || 0;

  // cálculos
  const percentual = meta > 0 ? Math.min((horas / meta) * 100, 100) : 0;
  const restante = meta - horas;

  // elementos
  const elHoras = document.getElementById("horas");
  const elProjetos = document.getElementById("projetos");
  const elMeta = document.getElementById("meta");
  const elPercentual = document.getElementById("percentual");
  const elRestante = document.getElementById("restante");
  const barra = document.querySelector(".barra-preenchida");

  // atualização dos dados
  animarNumero(elHoras, horas, "h");
  animarNumero(elProjetos, projetos, "", 700);
  animarNumero(elPercentual, Math.round(percentual), "%");
  elMeta.innerText = `Meta: ${meta} horas`;

  elRestante.innerText =
    restante > 0
      ? `Faltam ${restante}h para atingir a meta`
      : "Meta atingida 🎉";

  barra.style.width = "0%";

  setTimeout(() => {
    barra.style.width = percentual + "%";
  }, 200);

  // cor verde quando atingir a meta
  if (horas >= meta && meta > 0) {
    barra.style.background = "var(--validado)";
  }
}


// MOCK (Usar só por enquanto)
const dadosMock = {
  horas: 170,
  projetos: 3,
  meta: 200
};

atualizarTela(dadosMock);


// API DE VDD!!
// Quando liberarem o backend, é só descomentar e trocar a URL:

/*
fetch("URL_DA_API")
  .then(res => res.json())
  .then(dados => atualizarTela(dados))
  .catch(() => {
    console.error("Erro ao buscar dados");
  });
*/