import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {Ng2BootstrapModule, AlertModule, DatepickerModule, DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import {NavbarComponent} from './shared/navbar/index';

import {AppComponent}   from './app.component';
import {RestaurantesComponent} from './restaurantes/index';
import {RestauranteComponent} from './restaurantes/restaurante/index'

import {routing} from './app.routing';

import {RestauranteService} from './restaurantes/shared/restaurante.service';
import {ConfigService} from "./shared/utils/config.service";


@NgModule({
    imports: [
                BrowserModule,
                Ng2BootstrapModule,
                AlertModule,
                DatepickerModule,
                DropdownModule,
                HttpModule,
                routing
            ],
    providers: [
        RestauranteService,
        ConfigService
    ],
    declarations: [AppComponent, NavbarComponent,RestaurantesComponent,RestauranteComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
