"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./restaurantes/index');
var index_2 = require('./restaurantes/restaurante/index');
var search_result_component_1 = require('./restaurantes/search-result/search-result.component');
var inicio_component_1 = require('./inicio/inicio.component');
var refeicao_component_1 = require('./refeicoes/refeicao/refeicao.component');
var login_component_1 = require('./login/login.component');
var consumidor_component_1 = require('./consumidores/consumidor/consumidor.component');
var index_3 = require('./restaurantes/dashboard-restaurante/index');
var create_restaurante_component_1 = require("./restaurantes/create-restaurante/create-restaurante.component");
var unauthorized_component_1 = require('./shared/unauthorized/unauthorized.component');
var index_4 = require('./shared/guards/index');
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
        path: 'restaurantes/:criterio/:valor',
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
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: consumidor_component_1.ConsumidorComponent
    },
    {
        path: 'dashboard-restaurante',
        component: index_3.DashBoardRestauranteComponent,
        canActivate: [index_4.RestauranteGuard]
    },
    {
        path: 'create-restaurante',
        component: create_restaurante_component_1.CreateRestauranteComponent
    },
    {
        path: 'unauthorized',
        component: unauthorized_component_1.UnauthorizedComponent
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map