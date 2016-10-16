import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {
    Ng2BootstrapModule,
    AlertModule,
    DatepickerModule,
    DropdownModule,
    ModalModule,
    TabsModule,
    PaginationModule
} from 'ng2-bootstrap/ng2-bootstrap';

import {
    AgmCoreModule
} from 'angular2-google-maps/core';

import {NavbarComponent} from './shared/navbar/index';

import {InicioComponent} from './inicio/index'

import { MaterialModule } from '@angular/material';

import {AppComponent}   from './app.component';

import {RestaurantesComponent} from './restaurantes/index';
import {RestauranteComponent} from './restaurantes/restaurante/index';
import {DashBoardRestauranteComponent} from './restaurantes/dashboard-restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';

import {RefeicaoComponent} from './refeicoes/refeicao/index';

import {routing} from './app.routing';

import {RestauranteService} from './restaurantes/shared/restaurante.service';
import {RefeicaoService} from './refeicoes/shared/refeicao.service';
import {ConfigService} from "./shared/utils/config.service";
import {TipoRefeicaoService} from "./tipo-refeicoes/shared/tipo-refeicao.service";


import {OrderBy, FilterArrayPipe} from "./shared/utils/index";


@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule,
        AlertModule,
        DatepickerModule,
        DropdownModule,
        ModalModule,
        TabsModule,
        PaginationModule,
        HttpModule,
        routing,
        MaterialModule.forRoot(),
        AgmCoreModule.forRoot()
    ],
    providers: [
        RestauranteService,
        ConfigService,
        TipoRefeicaoService,
        RefeicaoService
    ],
    declarations: [
        AppComponent,
        InicioComponent,
        NavbarComponent,
        RestaurantesComponent,
        RestauranteComponent,
        DashBoardRestauranteComponent,
        SearchResultRestaurantesComponent,
        RefeicaoComponent,
        OrderBy,
        FilterArrayPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
