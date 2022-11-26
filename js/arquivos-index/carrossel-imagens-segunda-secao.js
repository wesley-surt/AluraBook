import { trocaDeImagem } from "../funcoes/troca-imagem.js";

var $proximoSegundaSecao = document.querySelector('[data-segundaSecao="proximo"]');
var $voltarSegundaSecao = document.querySelector('[data-segundaSecao="voltar"]');
var $imagensSegundaSecao = document.querySelectorAll('[data-segundaSecao="image"]');
var idDaBolinha = 0;

document.querySelector('[data-segundaSecao="0"]').classList.add('bolinha-marcada--segundaSecao');

$proximoSegundaSecao.addEventListener('click', () => {
    idDaBolinha++;

    if (idDaBolinha >= $imagensSegundaSecao.length) {
        idDaBolinha = 0;
    };

    trocaDeImagem(idDaBolinha, $imagensSegundaSecao);
    document.querySelector('.bolinha-marcada--segundaSecao').classList.remove('bolinha-marcada--segundaSecao');
    document.querySelector(`[data-segundaSecao="${idDaBolinha}"`).classList.add('bolinha-marcada--segundaSecao');
})

$voltarSegundaSecao.addEventListener('click', () => {
    idDaBolinha--;

    if (idDaBolinha < 0) {
        idDaBolinha = $imagensSegundaSecao.length - 1;
    }

    trocaDeImagem(idDaBolinha, $imagensSegundaSecao);
    document.querySelector('.bolinha-marcada--segundaSecao').classList.remove('bolinha-marcada--segundaSecao');
    document.querySelector(`[data-segundaSecao="${idDaBolinha}"`).classList.add('bolinha-marcada--segundaSecao');
})
