import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {
    Ng2BootstrapModule,
    AlertModule,
    DatepickerModule,
    DropdownModule,
    ModalModule,
    TabsModule
} from 'ng2-bootstrap/ng2-bootstrap';

import {
    AgmCoreModule
} from 'angular2-google-maps/core';

import {NavbarComponent} from './shared/navbar/index';

import {InicioComponent} from './inicio/index'

import {MdCardModule} from '@angular2-material/card';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdButtonModule} from '@angular2-material/button';
// import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';


import {AppComponent}   from './app.component';

import {RestaurantesComponent} from './restaurantes/index';
import {RestauranteComponent} from './restaurantes/restaurante/index'

import {RefeicaoComponent} from './refeicoes/refeicao/index'


import {routing} from './app.routing';

import {RestauranteService} from './restaurantes/shared/restaurante.service';
import {RefeicaoService} from './refeicoes/shared/refeicao.service';
import {ConfigService} from "./shared/utils/config.service";
import {TipoRefeicaoService} from "./tipo-refeicoes/shared/tipo-refeicao.service";


@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule,
        AlertModule,
        DatepickerModule,
        DropdownModule,
        ModalModule,
        TabsModule,
        HttpModule,
        routing,
        MdButtonModule,
        MdCardModule,
        MdProgressCircleModule,
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
        RefeicaoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
