import {Injectable}    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications';
import {tokenNotExpired, JwtHelper, AuthHttp} from 'angular2-jwt';
import {Router}          from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {ConfigService} from "../../shared/utils/config.service";
import {Consumidor} from "../../consumidores/shared/consumidor.model";
import {Utilizador} from "../../utilizadores/shared/utilizador.model";
import {myConfig}        from '../../shared/utils/auth.config';

// Avoid name not found warnings
declare var Auth0: any;

@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private loginUrl = '';
    public token: string;
    public email: string;
    public user: any;
    private is: boolean;
    private jwtHelper: JwtHelper = new JwtHelper();

    // Configure Auth0
    auth0 = new Auth0({
        domain: myConfig.domain,
        clientID: myConfig.clientID,
        callbackOnLocationHash: true,
        callbackURL: myConfig.callbackURL,
    });

    constructor(private http: Http,
                private configService: ConfigService,
                private router: Router,
                private _service: NotificationsService,
                public authHttp: AuthHttp) {
        this.loginUrl = configService.getApiURI();
        this.user = JSON.parse(localStorage.getItem('user-autenticado'));


        var result = this.auth0.parseHash(window.location.hash);

        if (result && result.idToken) {
            this.token = result.idToken;
            localStorage.setItem('id_token', result.idToken);
            this.auth0.getProfile(result.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                } else {
                    profile.user_metadata = profile.user_metadata || {};

                    this.findOrCreate(profile).subscribe(resultado => {
                        if (resultado) {
                            this.user = {
                                email: profile.email,
                                nome: profile.name,
                                imagem: profile.picture
                            };
                            localStorage.setItem('user-autenticado', JSON.stringify(this.user));
                            this.router.navigate(['/inicio']).then(() => this.createNotification());
                        }
                    });
                }
            });
        } else if (result && result.error) {
            alert('error: ' + result.error);
        }
    }


    public googleLogin() {
        this.auth0.login({
            connection: 'google-oauth2'
        }, function (err) {
            if (err) alert("something went wrong: " + err.message);
        });
    }


    public facebookLogin() {
        this.auth0.login({
            connection: 'facebook'
        }, function (err) {
            if (err) alert("something went wrong: " + err.message);
        });
    }


    public twitterLogin() {
        this.auth0.login({
            connection: 'twitter'
        }, function (err) {
            if (err) alert("something went wrong: " + err.message);
        });
    }


    public signup(consumidor: Consumidor, email, password): Observable < boolean > {
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
                if (response.json().token) {
                    // set token property
                    this.token = response.json().token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({
                        email: this.email,
                        token: response.json().token
                    }));
                    localStorage.setItem('id_token', response.json().token);

                    this.user = {
                        email: this.email,
                        nome: response.json().nome,
                        imagem: '../../../assets/images/user-icon.png',
                    };

                    this.createNotification();

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


    public login(email, password): Observable <string> {
        const url = `${this.loginUrl + 'api/auth/login'}`;

        this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        this.email = email;

        var body = 'email=' + email + '&password=' + password;

        return this.http.post(url, body, {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                if (response.json().token) {
                    // set token property
                    this.token = response.json().token;

                    // store email and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({
                        email: this.email,
                        nome: response.json().nome,
                        imagem: '../../../assets/images/user-icon.png',
                        token: response.json().token
                    }));

                    localStorage.setItem('id_token', response.json().token);

                    this.user = {
                        email: this.email,
                        nome: response.json().nome,
                        imagem: '../../../assets/images/user-icon.png'
                    };

                    this.createNotification();

                    // return tipo de user to indicate successful login
                    return response.json().tipo;
                } else {
                    // return null to indicate failed login
                    return null;
                }
            });
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }


    public isRestaurante(): boolean {


        var token = localStorage.getItem('rest');

        if (token !== null)
            return true;
        else return false;
    }


    public authenticatedUser(): Observable<any> {

        const url = `${this.loginUrl + 'api/auth/authenticated'}`;

        //this.headers = new Headers({'Authorization': 'Bearer "'+localStorage.getItem('id_Token')+'"'});

        return this.authHttp.get(url)
            .map((response: Response) => {
                //successful if there's a user in the response
                if (response.json().user) {
                    return response.json().user;
                } else {
                    // return null to indicate failed to get authenticated user
                    return null;
                }
            });
    }


    public logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.user = null;
        localStorage.removeItem('user-autenticado');
        localStorage.removeItem('id_token');
        localStorage.removeItem('rest');
    }


    private handleError(error: any): Promise < any > {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    private findOrCreate(user: any): Observable <boolean> {
        const url = `${this.loginUrl + 'api/auth/oauth'}`;

        this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        var body =
            'social_id=' + user.user_id +
            '&nome=' + user.name +
            '&tipo=consumidor';

        return this.http.post(url, body, {headers: this.headers})
            .map((response: Response) => {
                //signup and login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token !== null) {
                    // return true to indicate successful login
                    localStorage.setItem('id_token', response.json().token);
                    return true;
                }

                // return false to indicate failed login
                return false;

            });

    }

    createNotification() {
        this._service.success('Bem Vindo', 'ao Cardapio Online', {id: 123});

    }


    useJwtHelper() {
        var token = localStorage.getItem('id_token');

        console.log(
            this.jwtHelper.decodeToken(token),
            this.jwtHelper.getTokenExpirationDate(token),
            this.jwtHelper.isTokenExpired(token)
        );
    }

}
