"use strict";
var Restaurante = (function () {
    function Restaurante(nome, numero, telefone, email, av_rua, card_img, logo, estado, lat, long, utilizador) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.av_rua = av_rua;
        this.numero = numero;
        this.card_img = card_img;
        this.logo = logo;
        this.lat = lat;
        this.estado = estado;
        this.utilizador = utilizador;
    }
    return Restaurante;
}());
exports.Restaurante = Restaurante;
//# sourceMappingURL=restaurante.model.js.map