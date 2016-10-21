import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantesComponent}  from './restaurantes/index';
import {RestauranteComponent}  from './restaurantes/restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';

import {InicioComponent} from './inicio/inicio.component';
import {RefeicaoComponent} from './refeicoes/refeicao/refeicao.component';
import {LoginComponent} from './login/login.component';
import {ConsumidorComponent} from './consumidores/consumidor/consumidor.component';
import { AuthGuard } from './shared/guards/auth.guard'


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
        path: 'restaurantes/:criterio/:valor',
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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: ConsumidorComponent
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
