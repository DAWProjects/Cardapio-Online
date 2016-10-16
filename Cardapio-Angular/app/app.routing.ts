import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantesComponent}  from './restaurantes/index';
import {RestauranteComponent}  from './restaurantes/restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';

import {InicioComponent} from "./inicio/inicio.component";
import {RefeicaoComponent} from "./refeicoes/refeicao/refeicao.component";
import {DashBoardRestauranteComponent} from "./restaurantes/dashboard-restaurante/dashboard-restaurante.component";


const appRoutes: Routes = [

    {
        path: 'inicio',
        component: InicioComponent
    },
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
        path: 'restaurantes/:preco',
        component: SearchResultRestaurantesComponent
    },
    {
        path: 'refeicao',
        component: RefeicaoComponent
    },
    {
        path: 'refeicao/:idRestaurante/:idRefeicao',
        component: RefeicaoComponent
    },
    {
        path: 'dashboard-restaurante',
        component: DashBoardRestauranteComponent
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
