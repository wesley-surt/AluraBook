import { criaBolinhas } from "../modulos-e-funcoes/funcoes/cria-quantdd-necessaria-de-bolinhas.js";
import { trocaDeImagem } from "../modulos-e-funcoes/funcoes/troca-de-imagem.js";

var botaoDeProximo = document.getElementById('proximo');
var botaoDeVoltar = document.getElementById('voltar');
var imagemAtual = document.getElementById('image--atual');
var imagens = document.querySelectorAll('.image');
var bolinhas = document.querySelector('.bolinhas');
var idDaBolinha = 0;

criaBolinhas(imagens, bolinhas);

/*imagens.forEach(imagem => {
    imagem.onmousedown = function() {
        imagemAtual.style.marginLeft = 0 + 'px';
    };
    
})*/

botaoDeProximo.addEventListener('click', () => {
    idDaBolinha++;

    if (idDaBolinha >= imagens.length) {
        idDaBolinha = 0;
    };

    trocaDeImagem(idDaBolinha, imagens);
    console.log(idDaBolinha);
})

botaoDeVoltar.addEventListener('click', () => {
    idDaBolinha--;

    if (idDaBolinha < 0) {
        idDaBolinha = imagens.length - 1;
    }

    trocaDeImagem(idDaBolinha, imagens);
    console.log(idDaBolinha);
})
