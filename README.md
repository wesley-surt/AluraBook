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

codigo para chumbar a cor do gradiente no texto:
background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;





:root {
    --margin-das-imagens: .5rem;
    --altura-das-imagens: 186px;
    --largura-das-imagens: 88px;
}

* {
    margin: 0;
    padding: 0;
}

body {
    font-size: 16px;
    background: #FFFFFF;
    box-sizing: border-box;
}

section {
    display: inline-block;
    position: relative;
}

.conteiner--carrossel {
    overflow: auto;
    height: calc(var(--altura-das-imagens) + var(--margin-das-imagens) * 2);
    width: calc(var(--largura-das-imagens) * 2 + var(--margin-das-imagens) * 4);
    background: #EBECEE;
}

.conteiner--carrossel::-webkit-scrollbar {
    display: none;
}

.slide {
    display: flex;
    width: calc(var(--largura-das-imagens) * 5 + var(--margin-das-imagens) * 10);
}

.image {
    margin: var(--margin-das-imagens);
}

.image:last-child {
    margin-right: calc(var(--largura-das-imagens) / 2 + var(--margin-das-imagens));
}

.image:first-child {
    margin-left: calc(var(--largura-das-imagens) / 2 + var(--margin-das-imagens));
}

.image img {
    width: var(--largura-das-imagens);
    height: var(--altura-das-imagens);
}

#image--atual {
    transition: all 0.2s;
}

.btn {
    display: none;
}

#proximo::before {
    background: url(../image/proximo.png) center / contain;
    right: -8px;
}

#voltar::before {
    background: url(../image/voltar.png) center / contain;
    left: -8px;
}

#proximo::before, #voltar::before {
    position: absolute;
    content: '';
    top: 50%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
