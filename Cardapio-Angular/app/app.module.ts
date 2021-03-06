import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';
import {ImageUploadModule} from 'ng2-imageupload';

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

import {SimpleNotificationsModule} from "angular2-notifications";

import {FooterComponent} from './shared/footer/footer.component';

import {InicioComponent} from './inicio/index'

import {MaterialModule} from '@angular/material';

import {AppComponent}   from './app.component';

import {RestaurantesComponent} from './restaurantes/index';
import {RestauranteComponent} from './restaurantes/restaurante/index';
import {CreateRestauranteComponent} from './restaurantes/create-restaurante/index';
import {DashBoardRestauranteComponent} from './restaurantes/dashboard-restaurante/index';
import {SearchResultRestaurantesComponent} from './restaurantes/search-result/search-result.component';
import {LoginComponent} from './login/login.component';
import {ConsumidorComponent} from './consumidores/consumidor/consumidor.component';

import {RefeicaoComponent} from './refeicoes/refeicao/index';

import {UnauthorizedComponent} from './shared/unauthorized/unauthorized.component';

import {routing} from './app.routing';

import {RestauranteService} from './restaurantes/shared/restaurante.service';
import {RefeicaoService} from './refeicoes/shared/refeicao.service';
import {ConfigService} from "./shared/utils/config.service";
import {TipoRefeicaoService} from "./tipo-refeicoes/shared/tipo-refeicao.service";
import {ConsumidorService} from "./consumidores/shared/index";
import {AuthGuard, RestauranteGuard} from './shared/guards/index';


import {OrderBy, FilterArrayPipe} from "./shared/utils/index";
import {LocationService} from "./shared/utils/location.service";
import {LoginService} from "./login/shared/login.service";

import {AUTH_PROVIDERS}      from 'angular2-jwt';


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
        SimpleNotificationsModule,
        ImageUploadModule
    ],
    providers: [
        RestauranteService,
        ConfigService,
        TipoRefeicaoService,
        RefeicaoService,
        ConsumidorService,
        AuthGuard,
        RestauranteGuard,
        LocationService,
        LoginService,
        AUTH_PROVIDERS
    ],
    declarations: [
        AppComponent,
        InicioComponent,
        RestaurantesComponent,
        RestauranteComponent,
        CreateRestauranteComponent,
        DashBoardRestauranteComponent,
        SearchResultRestaurantesComponent,
        LoginComponent,
        ConsumidorComponent,
        RefeicaoComponent,
        OrderBy,
        FilterArrayPipe,
        FooterComponent,
        UnauthorizedComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
