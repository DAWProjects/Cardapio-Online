import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantesComponent}  from './restaurantes/index';
import {RestauranteComponent}  from './restaurantes/restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';

import {InicioComponent} from './inicio/inicio.component';
import {RefeicaoComponent} from './refeicoes/refeicao/refeicao.component';
import {LoginComponent} from './login/login.component';
import {ConsumidorComponent} from './consumidores/consumidor/consumidor.component';
import {DashBoardRestauranteComponent} from './restaurantes/dashboard-restaurante/index';
import {CreateRestauranteComponent} from "./restaurantes/create-restaurante/create-restaurante.component";
import {UnauthorizedComponent} from './shared/unauthorized/unauthorized.component';
import {RestauranteGuard} from './shared/guards/index';


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
        path: 'dashboard-restaurante',
        component: DashBoardRestauranteComponent,
        canActivate: [RestauranteGuard]
    },
    {
        path: 'create-restaurante',
        component: CreateRestauranteComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
