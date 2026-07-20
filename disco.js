//  Discografia Cards
var cardFlips = document.querySelectorAll('.card-flip');
cardFlips.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});

// Confetes 
function estourarConfetes(botao){
  const container = document.getElementById('confetesContainer');
  if(!container) return;

  const rect = botao.getBoundingClientRect();
  const botaoX = rect.left + rect.width/2;
  const botaoY = rect.top + rect.height/2;

  for(let i=0; i<30; i++){
    const confete = document.createElement('div');
    confete.classList.add('confete');
    confete.style.setProperty('--x', (Math.random()-0.5)*200 + "px");
    confete.style.setProperty('--y', (Math.random()-0.5)*200 + "px");
    confete.style.left = botaoX + "px";
    confete.style.top = botaoY + "px";
    confete.style.backgroundColor = `hsl(${Math.random()*360},100%,70%)`;
    container.appendChild(confete);
    setTimeout(()=>confete.remove(),1000);
  }
}


//brilho estrelinhas 
document.addEventListener("DOMContentLoaded", function () {
  
  var titulo = document.getElementById("tituloPrincipal");

  if (!titulo) {
    console.warn("Elemento com id 'tituloPrincipal' não encontrado.");
    return;
  }


  titulo.addEventListener("mousemove", function (evento) {
   
    var estrela = document.createElement("span");
    estrela.classList.add("floating-star");

    var simbolos = ["✨", "★", "💋"];
    var indice = Math.floor(Math.random() * simbolos.length);
    estrela.textContent = simbolos[indice];

    estrela.style.left = evento.clientX + "px";
    estrela.style.top = evento.clientY + "px";


    document.body.appendChild(estrela);


    setTimeout(function () {
      estrela.remove();
    }, 1000);
  });
});

// ================= Cursor personalizado =================
var brilho = document.querySelector('.cursor-brilho');
if(brilho){
  document.onmousemove = function(evento){
    brilho.style.left = evento.clientX + "px";
    brilho.style.top = evento.clientY + "px";
  };
}
