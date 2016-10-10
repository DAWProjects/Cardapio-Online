"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var config_service_1 = require("../../shared/utils/config.service");
var TipoRefeicaoService = (function () {
    function TipoRefeicaoService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.tiposRefeicaoUrl = '';
        this.tiposRefeicaoUrl = configService.getApiURI();
    }
    TipoRefeicaoService.prototype.getTipoRefeicoes = function () {
        return this.http.get(this.tiposRefeicaoUrl + 'todos-tipos-refeicoes')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    TipoRefeicaoService.prototype.update = function (tipoRefeicao) {
        var url = this.tiposRefeicaoUrl + "todos-tipos-refeicao/" + tipoRefeicao.id;
        return this.http
            .put(url, JSON.constructor(tipoRefeicao), { headers: this.headers })
            .toPromise()
            .then(function () { return tipoRefeicao; })
            .catch(this.handleError);
    };
    TipoRefeicaoService.prototype.create = function (tipoRefeicao) {
        var url = "" + (this.tiposRefeicaoUrl + 'criar-tipo-refeicoes');
        return this.http
            .post(url, JSON.constructor(tipoRefeicao), { headers: this.headers })
            .toPromise()
            .then(function () { return tipoRefeicao; })
            .catch(this.handleError);
    };
    TipoRefeicaoService.prototype.getTipoRefeicoesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getTipoRefeicoes(); });
    };
    ;
    TipoRefeicaoService.prototype.getTipoRefeicao = function (id) {
        return this.getTipoRefeicoes()
            .then(function (tipoRefeicoes) { return tipoRefeicoes.find(function (tipoRefeicao) { return tipoRefeicao.id === id; }); });
    };
    ;
    TipoRefeicaoService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TipoRefeicaoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], TipoRefeicaoService);
    return TipoRefeicaoService;
}());
exports.TipoRefeicaoService = TipoRefeicaoService;
//# sourceMappingURL=tipo-refeicao.service.js.map