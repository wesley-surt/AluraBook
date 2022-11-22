export var trocaDeImagem = (idDaBolinha, imagens, bolinhas) => {
    imagens[idDaBolinha].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })

}
