import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantesComponent}  from './restaurantes/index';
import {RestauranteComponent}  from './restaurantes/restaurante/index'


const appRoutes: Routes = [


    {
        path: 'restaurantes',
        component: RestaurantesComponent
    },

    {
        path: 'restaurante/:id',
        component: RestauranteComponent
    },

    {
        path: 'restaurante',
        component: RestauranteComponent
    },
    {
        path: '',
        redirectTo: '/restaurantes',
        pathMatch: 'full'
    }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
