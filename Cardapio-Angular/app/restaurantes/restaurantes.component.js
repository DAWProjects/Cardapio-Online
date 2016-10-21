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
var index_1 = require("./shared/index");
var RestaurantesComponent = (function () {
    function RestaurantesComponent(router, restauranteService) {
        this.router = router;
        this.restauranteService = restauranteService;
        this.content_loaded = false;
        this.estrelas = 4;
        this.criterioSelecionado = "nome";
    }
    RestaurantesComponent.prototype.getRestaurantes = function () {
        var _this = this;
        this.restauranteService.getRestaurantes()
            .then(function (restaurantes) { return _this.restaurantes = restaurantes; })
            .then(function () { return _this.content_loaded = true; });
    };
    RestaurantesComponent.prototype.ngOnInit = function () {
        this.getRestaurantes();
    };
    RestaurantesComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/restaurante', id]);
    };
    RestaurantesComponent.prototype.changeCriteria = function (criteria) {
        this.criterioSelecionado = criteria;
    };
    RestaurantesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lista-restaurantes',
            templateUrl: 'restaurantes.component.html',
            styleUrls: ['restaurantes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.RestauranteService])
    ], RestaurantesComponent);
    return RestaurantesComponent;
}());
exports.RestaurantesComponent = RestaurantesComponent;
//# sourceMappingURL=restaurantes.component.js.map