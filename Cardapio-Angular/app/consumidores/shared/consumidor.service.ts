import {Injectable}    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Consumidor} from './consumidor.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class ConsumidorService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private consumidoresUrl = '';


    constructor(private http: Http, private configService: ConfigService) {
        this.consumidoresUrl = configService.getApiURI();
    }


    update(consumidor: Consumidor): Promise<Consumidor> {
        const url = `${this.consumidoresUrl}todos-consumidores/${consumidor.id}`;

        return this.http
            .put(url, JSON.constructor(consumidor), {headers: this.headers})
            .toPromise()
            .then(() => consumidor)
            .catch(this.handleError);
    }

    create(consumidor: Consumidor): Promise<Consumidor> {
        const url = `${this.consumidoresUrl + 'criar-consumidor'}`;

        return this.http
            .post(url, JSON.constructor(consumidor), {headers: this.headers})
            .toPromise()
            .then(() => consumidor)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
