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

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    logout(){
        this.loginService.logout();
        this.voltar();
    }

    voltar(): void {
        this.router.navigate(['/inicio']);
    }

}
