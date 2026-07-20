// ================= Cursor personalizado =================
var brilho = document.querySelector('.cursor-brilho');
if(brilho){
  document.onmousemove = function(evento){
    brilho.style.left = evento.clientX + "px";
    brilho.style.top = evento.clientY + "px";
  };
}




// Quiz

// ================= Cursor personalizado =================
var brilho = document.querySelector('.cursor-brilho');
if (brilho) {
  document.onmousemove = function(evento) {
    brilho.style.left = evento.clientX + "px";
    brilho.style.top = evento.clientY + "px";
  };
}

// ===================================
// QUIZ
// ===================================

var acertos = 0;
var erros = 0;

function verificarResposta(botao) {

  const correta = botao.getAttribute("data-correta");
  const pergunta = botao.closest("section");
  const msg = pergunta.querySelector(".mensagem");
  const resultado = pergunta.querySelector(".resultado");

  resultado.style.display = "block";

  // ----- ACERTO -----
  if (correta === "true") {
    msg.textContent = "🎉 Parabéns! Você acertou! 💋";
    msg.style.color = "green";
    estourarConfetes(botao);

    acertos++;
    document.getElementById("placar").textContent = "Acertos: " + acertos;

  // ----- ERRO -----
  } else {
    msg.textContent = "❌ Resposta errada...";
    msg.style.color = "red";

    erros++;
    document.getElementById("erros").textContent = "Erros: " + erros;
  }

  // desabilita os botões
  pergunta.querySelectorAll("button:not(.tentar-novamente)").forEach(b => b.disabled = true);

  // botão de tentar novamente
  const retry = pergunta.querySelector(".tentar-novamente");
  if (retry) {
    retry.onclick = () => {
      resultado.style.display = "none";
      msg.textContent = "";
      pergunta.querySelectorAll("button:not(.tentar-novamente)").forEach(b => b.disabled = false);
    };
  }
}

window.verificarResposta = verificarResposta;


// ===================================
// BRILHO ESTRELINHAS
// ===================================

document.addEventListener("DOMContentLoaded", function () {

  var titulo = document.getElementById("tituloPrincipal");
  if (!titulo) return;

  titulo.addEventListener("mousemove", function (evento) {

    var estrela = document.createElement("span");
    estrela.classList.add("floating-star");

    var simbolos = ["✨", "★", "💋"];
    estrela.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    estrela.style.left = evento.clientX + "px";
    estrela.style.top = evento.clientY + "px";

    document.body.appendChild(estrela);

    setTimeout(() => estrela.remove(), 1000);
  });
});

// ===================================
// CONFETES
// ===================================

function estourarConfetes(botao) {
  const container = document.getElementById("confetesContainer");
  if (!container) return;

  for (let i = 0; i < 25; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confete");

    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;

    confete.style.setProperty("--x", `${x}px`);
    confete.style.setProperty("--y", `${y}px`);

    const botaoRect = botao.getBoundingClientRect();
    confete.style.left = botaoRect.left + botaoRect.width / 2 + "px";
    confete.style.top = botaoRect.top + botaoRect.height / 2 + "px";

    container.appendChild(confete);

    setTimeout(() => confete.remove(), 1000);
  }
}

//quiz confetes

