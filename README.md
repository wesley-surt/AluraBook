# AluraBook
 site de venda de livros

cores:

- bunner: 
background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
opacity: 0.75;

- corpo:
background: #EBECEE;

- bolas do carrosel de imagens:
background: #C4C4C4;

- texto e fundo de botao:
background: #EB9B00;

- background do rodape:
background: #F9F9F9;

codigo para chumbar a cor do gradiente no texto:
background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text




@import url(../../responsivo/responsivo.css);
@import url(bolinhas.css);
@import url(botao.css);
@import url(imagens.css);

:root {
    --espacamento-das-imagens: 1rem;
    --margin-top-bottom-das-imagens: .2rem;
    --altura-das-imagens: 19.2rem;
    --largura-das-imagens: 11.5rem;
}

.principal__conteiner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.conteiner-carrossel {
    display: flex;
    flex-direction: column;
    max-width: calc(var(--largura-das-imagens) * 3 + (var(--espacamento-das-imagens) + var(--espacamento-adicional)) * 2);
    overflow: hidden;
    position: relative;

}

.carrossel-imagens {
    overflow: auto;
    max-width: inherit;
}

.carrossel-imagens::-webkit-scrollbar {
    display: none;
}

.slide {
    align-items: center;
    display: flex;
    column-gap: calc(var(--espacamento-das-imagens) * var(--multiplicador-adicional));
    width: calc(var(--largura-das-imagens) * 4 + var(--espacamento-das-imagens) * 3);
}
