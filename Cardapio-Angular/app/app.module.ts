import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import { ImageUploadModule } from 'ng2-imageupload';

import {
    AlertModule,
    DatepickerModule,
    DropdownModule,
    ModalModule,
    TabsModule,
    PaginationModule
} from 'ng2-bootstrap/ng2-bootstrap';

import {RatingModule} from 'ng2-rating';

import {
    AgmCoreModule
} from 'angular2-google-maps/core';

import {NavbarComponent} from './shared/navbar/index';

import {InicioComponent} from './inicio/index'

import { MaterialModule } from '@angular/material';

import {AppComponent}   from './app.component';

import {RestaurantesComponent} from './restaurantes/index';
import {RestauranteComponent} from './restaurantes/restaurante/index';
import {CreateRestauranteComponent} from './restaurantes/create-restaurante/index';
import {DashBoardRestauranteComponent} from './restaurantes/dashboard-restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';
import {LoginComponent} from './login/login.component';
import {ConsumidorComponent} from './consumidores/consumidor/consumidor.component';

import {RefeicaoComponent} from './refeicoes/refeicao/index';

import {routing} from './app.routing';

import {RestauranteService} from './restaurantes/shared/restaurante.service';
import {RefeicaoService} from './refeicoes/shared/refeicao.service';
import {ConfigService} from "./shared/utils/config.service";
import {TipoRefeicaoService} from "./tipo-refeicoes/shared/tipo-refeicao.service";
import {ConsumidorService} from "./consumidores/shared/index";
import {AuthGuard} from './shared/guards/auth.guard';


import {OrderBy, FilterArrayPipe} from "./shared/utils/index";


@NgModule({
    imports: [
        BrowserModule,
        AlertModule,
        DatepickerModule,
        DropdownModule,
        ModalModule,
        TabsModule,
        PaginationModule,
        HttpModule,
        routing,
        MaterialModule.forRoot(),
        AgmCoreModule.forRoot(),
        RatingModule,

        ImageUploadModule
    ],
    providers: [
        RestauranteService,
        ConfigService,
        TipoRefeicaoService,
        RefeicaoService,
        ConsumidorService,
        AuthGuard
    ],
    declarations: [
        AppComponent,
        InicioComponent,
        NavbarComponent,
        RestaurantesComponent,
        RestauranteComponent,
        CreateRestauranteComponent,
        DashBoardRestauranteComponent,
        SearchResultRestaurantesComponent,
        LoginComponent,
        ConsumidorComponent,
        RefeicaoComponent,
        OrderBy,
        FilterArrayPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
