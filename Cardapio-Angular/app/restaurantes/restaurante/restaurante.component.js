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
var router_1 = require('@angular/router');
var index_1 = require("../shared/index");
var index_2 = require('../../tipo-refeicoes/shared/index');
var RestauranteComponent = (function () {
    function RestauranteComponent(route, restauranteService, tiporefeicaoService) {
        this.route = route;
        this.restauranteService = restauranteService;
        this.tiporefeicaoService = tiporefeicaoService;
    }
    RestauranteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.restauranteService.getRestaurante(id)
                .then(function (restaurante) { return _this.restaurante = restaurante; });
        });
        this.getTiposrefeicao();
    };
    RestauranteComponent.prototype.voltar = function () {
        window.history.back();
    };
    ;
    RestauranteComponent.prototype.getTiposrefeicao = function () {
        var _this = this;
        this.tiporefeicaoService.getTipoRefeicoes()
            .then(function (tiposrefeicao) { return _this.tiposrefeicao = tiposrefeicao; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Restaurante)
    ], RestauranteComponent.prototype, "restaurante", void 0);
    RestauranteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-restaurante',
            templateUrl: 'restaurante.component.html',
            styleUrls: ['restaurante.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.RestauranteService, index_2.TipoRefeicaoService])
    ], RestauranteComponent);
    return RestauranteComponent;
}());
exports.RestauranteComponent = RestauranteComponent;
//# sourceMappingURL=restaurante.component.js.map