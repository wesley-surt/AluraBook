import { trocaDeImagem } from "../funcoes/troca-imagem.js";

var $proximoPrimeiraSecao = document.querySelector('[data-primeiraSecao="proximo"]');
var $voltarPrimeiraSecao = document.querySelector('[data-primeiraSecao="voltar"]');
var $imagensPrimeiraSecao = document.querySelectorAll('[data-primeiraSecao="image"]');
var idDaBolinha = 0;

document.querySelector('[data-primeiraSecao="0"]').classList.add('bolinha-marcada--primeiraSecao');

$proximoPrimeiraSecao.addEventListener('click', () => {
    idDaBolinha++;

    if (idDaBolinha >= $imagensPrimeiraSecao.length) {
        idDaBolinha = 0;
    };

    trocaDeImagem(idDaBolinha, $imagensPrimeiraSecao);
    document.querySelector('.bolinha-marcada--primeiraSecao').classList.remove('bolinha-marcada--primeiraSecao');
    document.querySelector(`[data-primeiraSecao="${idDaBolinha}"`).classList.add('bolinha-marcada--primeiraSecao');
})

$voltarPrimeiraSecao.addEventListener('click', () => {
    idDaBolinha--;

    if (idDaBolinha < 0) {
        idDaBolinha = $imagensPrimeiraSecao.length - 1;
    }

    trocaDeImagem(idDaBolinha, $imagensPrimeiraSecao);
    document.querySelector('.bolinha-marcada--primeiraSecao').classList.remove('bolinha-marcada--primeiraSecao');
    document.querySelector(`[data-primeiraSecao="${idDaBolinha}"`).classList.add('bolinha-marcada--primeiraSecao');
})
