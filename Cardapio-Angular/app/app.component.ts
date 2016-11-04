import {Component, ViewContainerRef } from '@angular/core';
import {Utilizador} from "./utilizadores/shared/utilizador.model";
import {Router} from '@angular/router'
import {LoginService} from "./login/shared/login.service";

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
                private loginService: LoginService) {
        if (loginService['token']) {
            this.user = JSON.parse(localStorage.getItem('user-autenticado'));
        }
    }


    logout(){
        this.loginService.logout();
        this.router.navigate(['/inicio']);
    }

}
