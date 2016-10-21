import {Component} from '@angular/core';
import {Consumidor, ConsumidorService} from '../../consumidores/shared/index';
import {Router} from '@angular/router';
import {Utilizador} from "../../utilizadores/shared/utilizador.model";

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']

})
export class NavbarComponent {

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
