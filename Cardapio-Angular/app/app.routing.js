"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./restaurantes/index');
var index_2 = require('./restaurantes/restaurante/index');
var search_result_component_1 = require('./restaurantes/search-result/search-result.component');
var inicio_component_1 = require("./inicio/inicio.component");
var refeicao_component_1 = require("./refeicoes/refeicao/refeicao.component");
var dashboard_restaurante_component_1 = require("./restaurantes/dashboard-restaurante/dashboard-restaurante.component");
var appRoutes = [
    {
        path: 'inicio',
        component: inicio_component_1.InicioComponent
    },
    {
        path: 'restaurantes',
        component: index_1.RestaurantesComponent
    },
    {
        path: 'restaurante/:id',
        component: index_2.RestauranteComponent
    },
    {
        path: 'restaurante',
        component: index_2.RestauranteComponent
    },
    {
        path: 'restaurantes/:preco',
        component: search_result_component_1.SearchResultRestaurantesComponent
    },
    {
        path: 'refeicao',
        component: refeicao_component_1.RefeicaoComponent
    },
    {
        path: 'refeicao/:idRestaurante/:idRefeicao',
        component: refeicao_component_1.RefeicaoComponent
    },
    {
        path: 'dashboard-restaurante',
        component: dashboard_restaurante_component_1.DashBoardRestauranteComponent
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map