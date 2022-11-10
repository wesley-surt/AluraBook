import { criaBolinhas } from "../modulos-e-funcoes/funcoes/cria-quantdd-necessaria-de-bolinhas.js";
import { trocaDeImagem } from "../modulos-e-funcoes/funcoes/troca-de-imagem.js";

var botaoDeProximo = document.getElementById('proximo');
var botaoDeVoltar = document.getElementById('voltar');
var imagemAtual = document.getElementById('image--atual');
var imagens = document.querySelectorAll('.image');
var bolinhas = document.querySelector('.bolinhas');
var idDaBolinhaDaImagemAtual = 0;

criaBolinhas(imagens, bolinhas);

imagens.forEach(imagem => {
    imagem.onmousedown = function() {
        imagemAtual.style.marginLeft = 0 + 'px';
    };
    
})

botaoDeProximo.addEventListener('click', () => {
    idDaBolinhaDaImagemAtual++;

    if (idDaBolinhaDaImagemAtual >= imagens.length) {
        idDaBolinhaDaImagemAtual = 0;
    };

    trocaDeImagem(idDaBolinhaDaImagemAtual, imagemAtual);
    console.log(idDaBolinhaDaImagemAtual);
})

botaoDeVoltar.addEventListener('click', () => {
    idDaBolinhaDaImagemAtual--;

    if (idDaBolinhaDaImagemAtual < 0) {
        idDaBolinhaDaImagemAtual = imagens.length - 1;
    }

    trocaDeImagem(idDaBolinhaDaImagemAtual, imagemAtual);
    console.log(idDaBolinhaDaImagemAtual);
})
