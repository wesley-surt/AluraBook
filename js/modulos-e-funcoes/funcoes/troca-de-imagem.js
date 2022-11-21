export var trocaDeImagem = (idDaBolinha, imagens) => {
    imagens[idDaBolinha].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })
}
