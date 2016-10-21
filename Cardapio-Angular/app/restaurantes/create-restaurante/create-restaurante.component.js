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
var CreateRestauranteComponent = (function () {
    function CreateRestauranteComponent(route, restauranteService) {
        this.route = route;
        this.restauranteService = restauranteService;
        this.step = 'step1';
    }
    CreateRestauranteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.restauranteService.getRestaurante(id)
                .then(function (restaurant) { return _this.restaurante = restaurant; });
        });
    };
    CreateRestauranteComponent.prototype.onOpt = function (step) {
        this.step = step;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Restaurante)
    ], CreateRestauranteComponent.prototype, "restaurante", void 0);
    CreateRestauranteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-restaurante',
            templateUrl: 'create-restaurante.component.html',
            styleUrls: ['create-restaurante.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.RestauranteService])
    ], CreateRestauranteComponent);
    return CreateRestauranteComponent;
}());
exports.CreateRestauranteComponent = CreateRestauranteComponent;
//# sourceMappingURL=create-restaurante.component.js.map