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

    public user: any = {};
    public error: string = '';
    public loading = false;


    constructor(private router: Router,
                private loginService: LoginService) {

    }

    login(): void {
        this.loading = true;
        this.loginService.login(this.user.username, this.user.password)
            .subscribe(resultado => {
                if (resultado == 'consumidor') {
                    this.router.navigate(['/inicio']);
                }
                else if (resultado == 'restaurante') {
                    localStorage.setItem('rest', '1');
                    this.router.navigate(['/dashboard-restaurante']);
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
