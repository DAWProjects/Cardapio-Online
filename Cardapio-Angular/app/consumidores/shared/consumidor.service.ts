import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Consumidor } from './consumidor.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class ConsumidorService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private consumidoresUrl = '';
    public token: string;


    constructor(private http: Http, private configService: ConfigService) {
        this.consumidoresUrl = configService.getApiURI();
        var currentUser = JSON.parse(localStorage.getItem('user-autenticado'));
        this.token = currentUser && currentUser.token;
    }



    update(consumidor: Consumidor): Promise<Consumidor> {
        const url = `${this.consumidoresUrl}todos-consumidores/${consumidor.id}`;

        return this.http
            .put(url, JSON.constructor(consumidor), { headers: this.headers })
            .toPromise()
            .then(() => consumidor)
            .catch(this.handleError);
    }

    create(consumidor: Consumidor): Promise<Consumidor> {
        const url = `${this.consumidoresUrl + 'criar-consumidor'}`;

        return this.http
            .post(url, JSON.constructor(consumidor), { headers: this.headers })
            .toPromise()
            .then(() => consumidor)
            .catch(this.handleError);
    }


    login(email, password): Observable<boolean> {
        const url = `${this.consumidoresUrl + 'api/autenticar'}`;
        return this.http.post(url , JSON.constructor({ 'email': email, 'password': password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user-autenticado', JSON.stringify({ email: email, token: token }));

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
