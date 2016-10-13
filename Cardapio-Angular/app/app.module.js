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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var core_2 = require('angular2-google-maps/core');
var index_1 = require('./shared/navbar/index');
var index_2 = require('./inicio/index');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var index_3 = require('./restaurantes/index');
var index_4 = require('./restaurantes/restaurante/index');
var search_result_component_1 = require('./restaurantes/search-result/search-result.component');
var index_5 = require('./refeicoes/refeicao/index');
var app_routing_1 = require('./app.routing');
var restaurante_service_1 = require('./restaurantes/shared/restaurante.service');
var refeicao_service_1 = require('./refeicoes/shared/refeicao.service');
var config_service_1 = require("./shared/utils/config.service");
var tipo_refeicao_service_1 = require("./tipo-refeicoes/shared/tipo-refeicao.service");
var index_6 = require("./shared/utils/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.DatepickerModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.ModalModule,
                ng2_bootstrap_1.TabsModule,
                ng2_bootstrap_1.PaginationModule,
                http_1.HttpModule,
                app_routing_1.routing,
                material_1.MaterialModule.forRoot(),
                core_2.AgmCoreModule.forRoot()
            ],
            providers: [
                restaurante_service_1.RestauranteService,
                config_service_1.ConfigService,
                tipo_refeicao_service_1.TipoRefeicaoService,
                refeicao_service_1.RefeicaoService
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.InicioComponent,
                index_1.NavbarComponent,
                index_3.RestaurantesComponent,
                index_4.RestauranteComponent,
                search_result_component_1.SearchResultRestaurantesComponent,
                index_5.RefeicaoComponent,
                index_6.OrderBy,
                index_6.FilterArrayPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map