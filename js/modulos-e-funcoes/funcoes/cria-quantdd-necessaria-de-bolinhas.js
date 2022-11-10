export var criaBolinhas = (imagens, bolinhas) => {
    for (let i = 0; i < imagens.length; i++) {
        var divBolinha = document.createElement('div');
        var idDaBolinha = i;
        
        divBolinha.id = idDaBolinha;
        bolinhas.append(divBolinha);
    }
}
