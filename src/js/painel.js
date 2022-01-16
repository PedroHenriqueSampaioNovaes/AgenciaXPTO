/* 
  quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a seguinte

  a imagem atual começa em 0 pq é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agr vou mostrar a segunda imagem

  esconder todas as imagens
  pegar todas as imagens usando o DOM e remover a classe mostrar

  mostrar a próxima imagem
  pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagem() { 
  imagensPainel[imagemAtual].classList.add("mostrar");
}

// Função acionada ao pressionar a seta para direita
setaAvancar.addEventListener("click", function () {
  const totalImagens = imagensPainel.length - 1;
  if (imagemAtual === totalImagens) {
    return;
  } 

  imagemAtual++;

  if (setaVoltar.style.opacity !== 1) {
    setaVoltar.style.removeProperty("opacity");
  }
  if (imagemAtual === totalImagens) {
    setaAvancar.style.opacity = 0.5;
  } 

  esconderImagens();
  mostrarImagem();
});

// Função acionada ao pressionar a seta para esquerda
setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  if (setaAvancar.style.opacity !== 1) {
    setaAvancar.style.removeProperty("opacity");
  }
  if (imagemAtual === 0) { 
    setaVoltar.style.opacity = .5
  }

  esconderImagens();
  mostrarImagem();
});
