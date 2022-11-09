import { criaConjuntoDeBolinhas } from "../modulos-e-funcoes/funcoes/cria-quantdd-necessaria-de-bolinhas.js";

var botaoDeProximo = document.getElementById('proximo');
var botaoDeVoltar = document.getElementById('voltar');
var imagemAtual = document.getElementById('image--atual');
var imagens = document.querySelectorAll('.image');
var conjuntoDeBolinhs = document.querySelector('.conjunto-de-bolinhas');
var idDabolinhaDaImagemAtual = 0;

criaConjuntoDeBolinhas(imagens, conjuntoDeBolinhs);

botaoDeProximo.addEventListener('click', () => {
    imagemAtual.style.marginLeft = -222+'px';
})

botaoDeVoltar.addEventListener('click', () => {
    imagemAtual.style.marginLeft = 0+'px';
})
