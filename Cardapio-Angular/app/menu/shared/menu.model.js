"use strict";
var Menu = (function () {
    function Menu(descricao, imagem, preco, hora_inicio, hora_fim, restaurante, refeicao) {
        this.descricao = descricao;
        this.preco = preco;
        this.hora_inicio = hora_inicio;
        this.hora_fim = hora_fim;
        this.imagem = imagem;
        this.refeicao = refeicao;
        this.restaurante = restaurante;
    }
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.model.js.map