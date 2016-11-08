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
var index_1 = require('../shared/index');
var router_1 = require('@angular/router');
var ConsumidorComponent = (function () {
    function ConsumidorComponent(router, consumidorService) {
        this.router = router;
        this.consumidorService = consumidorService;
    }
    ConsumidorComponent.prototype.add = function (nome, email, password, telefone) {
        var _this = this;
        this.consumidor = new index_1.Consumidor(nome, "M", telefone, email, password);
        this.consumidorService.create(this.consumidor).then(function () { return _this.voltar(); });
    };
    ConsumidorComponent.prototype.voltar = function () {
        this.router.navigate(['/inicio']);
    };
    ConsumidorComponent.prototype.ngOnInit = function () {
    };
    ConsumidorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup-consumidor',
            templateUrl: 'consumidor.component.html',
            styleUrls: ['consumidor.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.ConsumidorService])
    ], ConsumidorComponent);
    return ConsumidorComponent;
}());
exports.ConsumidorComponent = ConsumidorComponent;
//# sourceMappingURL=consumidor.component.js.map