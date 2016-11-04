import {Injectable}    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {ConfigService} from "../../shared/utils/config.service";
import {Consumidor} from "../../consumidores/shared/consumidor.model";
import {Utilizador} from "../../utilizadores/shared/utilizador.model";


@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private loginUrl = '';
    public token: string;
    public email: string;


    constructor(private http: Http, private configService: ConfigService) {
        this.loginUrl = configService.getApiURI();
        var currentUser = JSON.parse(localStorage.getItem('user-autenticado'));
        this.token = currentUser && currentUser.token;
    }


    login(email, password): Observable<string> {
        const url = `${this.loginUrl + 'api/auth/login'}`;

        this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        this.email = email;

        var body = 'email=' + email + '&password=' + password;

        return this.http.post(url, body, {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let tipo = response.json().tipo;
                let userId = response.json().userId;

                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({
                        email: this.email,
                        id: userId,
                        token: token
                    }));

                    // return tipo de user to indicate successful login
                    return tipo;
                } else {
                    // return null to indicate failed login
                    return null;
                }
            });
    }


    oauthlogin(): Observable<Utilizador> {

        return this.http.get(`http://localhost:8000/auth/facebook`)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user: Utilizador = response.json().user;

                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({
                        user: user,
                        token: token
                    }));

                    // return t user to indicate successful login
                    return user
                } else {
                    // return null to indicate failed login
                    return null;
                }
            });

    }


    signup(consumidor: Consumidor, email, password): Observable<boolean> {
        const url = `${this.loginUrl + 'api/auth/signup'}`;
        this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        this.email = email;
        var body = 'email=' + email +
            '&password=' + password +
            '&tipo=consumidor&nome=' + consumidor.nome +
            '&sexo=' + consumidor.sexo +
            '&telefone=' + consumidor.telefone;

        return this.http.post(url, body, {headers: this.headers})
            .map((response: Response) => {
                //signup and login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({email: this.email, token: token}));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('user-autenticado');
    }


    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
