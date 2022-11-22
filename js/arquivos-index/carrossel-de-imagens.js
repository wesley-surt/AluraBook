import { trocaDeImagem } from "../modulos-e-funcoes/funcoes/troca-imagem-bolinha.js";

var botaoDeProximo = document.getElementById('proximo');
var botaoDeVoltar = document.getElementById('voltar');
var imagens = document.querySelectorAll('.image');
var bolinhas = document.querySelector('.bolinhas');
var idDaBolinha = 0;

document.getElementById('0').classList.add('bolinha-marcada');

botaoDeProximo.addEventListener('click', () => {
    idDaBolinha++;

    if (idDaBolinha >= imagens.length) {
        idDaBolinha = 0;
    };

    trocaDeImagem(idDaBolinha, imagens, bolinhas);
    document.querySelector('.bolinha-marcada').classList.remove('bolinha-marcada');
    document.getElementById(`${idDaBolinha}`).classList.add('bolinha-marcada');
})

botaoDeVoltar.addEventListener('click', () => {
    idDaBolinha--;

    if (idDaBolinha < 0) {
        idDaBolinha = imagens.length - 1;
    }

    trocaDeImagem(idDaBolinha, imagens, bolinhas);
    document.querySelector('.bolinha-marcada').classList.remove('bolinha-marcada');
    document.getElementById(`${idDaBolinha}`).classList.add('bolinha-marcada');
})
