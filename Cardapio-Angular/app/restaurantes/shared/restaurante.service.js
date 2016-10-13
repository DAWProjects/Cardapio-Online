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
var RestauranteService = (function () {
    function RestauranteService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.restaurantesUrl = '';
        this.restaurantesUrl = configService.getApiURI();
    }
    RestauranteService.prototype.getRestaurantes = function () {
        return this.http.get(this.restaurantesUrl + 'todos-restaurantes')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    RestauranteService.prototype.getRestaurantesPorPreco = function () {
        return this.http.get(this.restaurantesUrl + 'refeicaos-by-preco')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    RestauranteService.prototype.update = function (restaurante) {
        var url = this.restaurantesUrl + "todos-restaurantes/" + restaurante.id;
        return this.http
            .put(url, JSON.constructor(restaurante), { headers: this.headers })
            .toPromise()
            .then(function () { return restaurante; })
            .catch(this.handleError);
    };
    RestauranteService.prototype.create = function (restaurante) {
        var url = "" + (this.restaurantesUrl + 'criar-restaurante');
        return this.http
            .post(url, JSON.constructor(restaurante), { headers: this.headers })
            .toPromise()
            .then(function () { return restaurante; })
            .catch(this.handleError);
    };
    RestauranteService.prototype.getRestaurantesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getRestaurantes(); });
    };
    ;
    RestauranteService.prototype.getRestaurante = function (id) {
        return this.getRestaurantes()
            .then(function (restaurantes) { return restaurantes.find(function (restaurante) { return restaurante.id === id; }); });
    };
    ;
    RestauranteService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    RestauranteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], RestauranteService);
    return RestauranteService;
}());
exports.RestauranteService = RestauranteService;
//# sourceMappingURL=restaurante.service.js.map