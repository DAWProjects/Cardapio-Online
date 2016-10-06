"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./restaurantes/index');
var index_2 = require('./restaurantes/restaurante/index');
var appRoutes = [
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
        path: '',
        redirectTo: '/restaurantes',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map