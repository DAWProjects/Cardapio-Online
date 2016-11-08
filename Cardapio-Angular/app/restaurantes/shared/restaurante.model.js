"use strict";
var Restaurante = (function () {
    function Restaurante(nome, telefone, cidade, av_rua, numero, lat, long, logo, imagem, estado, utilizador) {
        this.nome = nome;
        this.telefone = telefone;
        this.cidade = cidade;
        this.av_rua = av_rua;
        this.numero = numero;
        this.lat = lat;
        this.long = long;
        this.logo = logo;
        this.imagem = imagem;
        this.estado = estado;
        this.utilizador = utilizador;
    }
    return Restaurante;
}());
exports.Restaurante = Restaurante;
//# sourceMappingURL=restaurante.model.js.map