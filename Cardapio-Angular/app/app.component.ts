import {Component, ViewContainerRef } from '@angular/core';
import {Utilizador} from "./utilizadores/shared/utilizador.model";
import {ConsumidorService} from "./consumidores/shared/consumidor.service";
import {Router} from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;
    public sideNav: any;
    isCollapsed = true;
    user: Utilizador;

    constructor(private router: Router,
                private consumidorService: ConsumidorService) {
        if (consumidorService['token']) {
            this.user = JSON.parse(localStorage.getItem('user-autenticado'));
        }
    }


    logout(){
        this.consumidorService.logout();
        this.router.navigate(['/inicio']);
    }

}
