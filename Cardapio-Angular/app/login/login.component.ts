import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Utilizador} from "../utilizadores/shared/utilizador.model";
import {LoginService} from "./shared/login.service";

@Component({
    moduleId: module.id,
    selector: 'login-user',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']

})
export class LoginComponent {

    model: any = {};
    error: string = '';
    loading = false;
    user: Utilizador;

    constructor(private router: Router,
                private loginService: LoginService) {
    }

    login(): void {
        this.loading = true;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(resultado => {
                if (resultado == 'consumidor') {
                    this.router.navigate(['/inicio'])
                }
                else if (resultado == 'restaurante') {
                    this.user = JSON.parse(localStorage.getItem('user-autenticado'));
                    this.router.navigate(['/dashboard-restaurante', this.user.id]);
                    this.loading = false;
                }
                else {
                    //
                    // TODO
                    // Pegar o erro do server
                    this.loading = false;
                }
            });


    }


    loginFacebook(): void {
        this.loginService.facebookLogin();


    }

    loginGoogle(): void {
        this.loginService.googleLogin();

    }

    loginTwitter(): void {
        this.loginService.twitterLogin();

    }

    voltar(): void {
        this.router.navigate(['/inicio']);
    }

}
