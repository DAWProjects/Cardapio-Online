import {Component, ViewContainerRef} from '@angular/core';
import {Utilizador} from "./utilizadores/shared/utilizador.model";
import {Router} from '@angular/router'
import {LoginService} from "./login/shared/login.service";
declare var swal: any;

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

    public options = {
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: false,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible',
        rtl: false,
        animate: 'scale',
        position: ['right', 'bottom']
    };

    constructor(private router: Router,
                private loginService: LoginService) {}


    showLogoutAlert() {
        swal({
            title: 'Deseja realmente terminar a sessão?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, terminar!'
        }).then(this.logout());
    }


    logout() {
        this.loginService.logout();
        this.voltar();
    }

    voltar(): void {
        this.router.navigate(['/inicio']);
    }


}
