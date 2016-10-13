import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Restaurante } from './restaurante.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class RestauranteService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private restaurantesUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.restaurantesUrl = configService.getApiURI();
    }

    getRestaurantes(): Promise<Restaurante[]> {
        return this.http.get(this.restaurantesUrl+'todos-restaurantes')
            .toPromise()
            .then(response => response.json() as Restaurante[])
            .catch(this.handleError);
    };


    getRestaurantesPorPreco(): Promise<Restaurante[]> {
        return this.http.get(this.restaurantesUrl+'refeicaos-by-preco')
            .toPromise()
            .then(response => response.json() as Restaurante[])
            .catch(this.handleError);
    };


    update(restaurante: Restaurante): Promise<Restaurante> {
        const url = `${this.restaurantesUrl}todos-restaurantes/${restaurante.id}`;

        return this.http
            .put(url, JSON.constructor(restaurante), {headers: this.headers})
            .toPromise()
            .then(() => restaurante)
            .catch(this.handleError);
    }

    create(restaurante: Restaurante): Promise<Restaurante> {
        const url = `${this.restaurantesUrl+'criar-restaurante'}`;

        return this.http
            .post(url, JSON.constructor(restaurante), {headers: this.headers})
            .toPromise()
            .then(() => restaurante)
            .catch(this.handleError);
    }


    getRestaurantesSlowly(): Promise<Restaurante[]> {
        return new Promise<Restaurante[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getRestaurantes());
    };

    getRestaurante(id: number): Promise<Restaurante> {
        return this.getRestaurantes()
            .then(restaurantes => restaurantes.find(restaurante => restaurante.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
