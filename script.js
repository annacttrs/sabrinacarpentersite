function expandCard(card) {
  card.style.transform = "scale(1.1)";
  card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
}

function shrinkCard(card) {
  card.style.transform = "scale(1)";
  card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
}

function flipCard(card) {
  card.classList.toggle('flipped');
}

var brilho = document.querySelector('.cursor-brilho');

document.onmousemove = function(evento) {
  brilho.style.left = evento.clientX + "px";
  brilho.style.top = evento.clientY + "px";
};



// ================= Frases Sabrina =================
var frases = [
  "That's that me, espresso.",
  "I'm in love with a boy who's in love with the world.",
  "Nonsense but it makes sense to me.",
  "I overthink, then I write a song about it.",
  "If it’s not dramatic, is it even a song?",
  "Turning heartbreak into pop music since always."
];

function mostrarFraseAleatoria() {
  var fraseEl = document.getElementById("fraseSabrina");
  if(fraseEl){
    var indice = Math.floor(Math.random() * frases.length);
    fraseEl.textContent = frases[indice];
  }
}
window.addEventListener("load", mostrarFraseAleatoria);

// ================= Cursor personalizado =================
var brilho = document.querySelector('.cursor-brilho');
if(brilho){
  document.onmousemove = function(evento){
    brilho.style.left = evento.clientX + "px";
    brilho.style.top = evento.clientY + "px";
  };
}

// ================= Slider =================
var dvSlider = document.getElementById('dvSlider');
if(dvSlider){
  var slides = [
    'https://capricho.abril.com.br/wp-content/uploads/2024/07/sabrina.jpg?quality=85&strip=info&w=1024',
    'https://uploads.metroimg.com/wp-content/uploads/2025/02/03173639/Sabrina-Carpenter-3.jpg',
    'https://content.api.news/v3/images/bin/6c341c221f05bdcba9a7119fa2cd24df',
    'https://lorena.r7.com/wp-content/uploads/2025/09/Untitled-design-16.png',
    'https://blog.quizur.com/wp-content/uploads/2024/04/maxresdefault-2-1200x675.webp'
  ];
  var patual = 0;
  var tmpslider;

  function trocaAutomatica(){
    patual++;
    if(patual >= slides.length) patual = 0;
    dvSlider.style.backgroundImage = `url('${slides[patual]}')`;
  }

  function iniciaSlider(){
    dvSlider.style.backgroundImage = `url('${slides[patual]}')`;
    tmpslider = setInterval(trocaAutomatica,2000);
  }

  function parar(){ clearInterval(tmpslider); }

  function troca(dir){
    patual += dir;
    if(patual < 0) patual = slides.length - 1;
    else if(patual >= slides.length) patual = 0;
    dvSlider.style.backgroundImage = `url('${slides[patual]}')`;
    clearInterval(tmpslider);
  }

  window.iniciaSlider = iniciaSlider;
  window.parar = parar;
  window.troca = troca;
  iniciaSlider();
}

//  Discografia Cards
var cardFlips = document.querySelectorAll('.card-flip');
cardFlips.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});

//  Botão Ingressos 
var btnIngressos = document.getElementById('ingressos');
if(btnIngressos){
  btnIngressos.addEventListener('click', () => {
    window.open('https://store.sabrinacarpenter.com/pages/tour?srsltid=AfmBOorU4RC0dLKuNm32nD8UQ1qZwEMKeXy1SKjVJYP92g4vqdWo4mDE');
  });
}

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

