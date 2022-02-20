/* 
    Clicando nas setas teremos que desativar todas as imagens que estão aparecendo, removendo a classe responsável por mostrar.
    
    Preciso Saber qual é a próxima imagem a ser selecionada por meio de uma lista contendo-as e aplicar a classe mostrar à ela.

    Se estiver na primeira ou última imagem, preciso impedir que o usuário consiga clicar nas setas, aplicando um estilo para que o usuário entenda que n é mais clicável.
  */

function initCarrosselImg() {
  const imagens = document.querySelectorAll('.img-painel');
  let imagemAtual = 0;
  const setaAvancar = document.querySelector('.seta-avancar');
  const setaVoltar = document.querySelector('.seta-voltar');

  if (imagens.length) {
    function esconderImagem() {
      imagens.forEach((img) => {
        img.classList.remove('mostrar');
      })
    }

    function mostrarImagem() {
      imagens[imagemAtual].classList.add('mostrar');
    }

    function desativarSeta(event) {
      event.target.classList.add('inativo');
    }

    function ativarSeta(seta) {
      seta.classList.remove('inativo');
    }

    setaVoltar.classList.add('inativo');
    mostrarImagem();
    setaAvancar.addEventListener('click', (target) => {
      const qtdImagens = imagens.length - 1
      if (imagemAtual === qtdImagens) return;
      imagemAtual += 1;

      esconderImagem();
      mostrarImagem();

      if (setaVoltar.classList.contains('inativo')) ativarSeta(setaVoltar);

      if (imagemAtual === qtdImagens) {
        desativarSeta(target);
      }
    })

    setaVoltar.addEventListener('click', (target) => {
      if (imagemAtual === 0) return
      imagemAtual -= 1;

      esconderImagem();
      mostrarImagem();

      if (setaAvancar.classList.contains('inativo')) ativarSeta(setaAvancar);

      if (imagemAtual === 0) {
        desativarSeta(target);
      }
    })
  }
}
initCarrosselImg();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.cabecalho .menu a[href^="#"]');
  
  if (linksInternos.length) {
    function scrollSuave(event) {
      event.preventDefault();

      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSuave);
    });
  }
}
initScrollSuave();