import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Refeicao } from './refeicao.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class RefeicaoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private refeicoesUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.refeicoesUrl = configService.getApiURI();
    }

    getRefeicoes(): Promise<Refeicao[]> {
        return this.http.get(this.refeicoesUrl+'todas-refeicoes')
            .toPromise()
            .then(response => response.json() as Refeicao[])
            .catch(this.handleError);
    };


    update(refeicao: Refeicao): Promise<Refeicao> {
        const url = `${this.refeicoesUrl}todas-refeicoes/${refeicao.id}`;

        return this.http
            .put(url, JSON.constructor(refeicao), {headers: this.headers})
            .toPromise()
            .then(() => refeicao)
            .catch(this.handleError);
    }

    create(refeicao: Refeicao): Promise<Refeicao> {
        const url = `${this.refeicoesUrl+'criar-refeicao'}`;

        return this.http
            .post(url, JSON.constructor(refeicao), {headers: this.headers})
            .toPromise()
            .then(() => refeicao)
            .catch(this.handleError);
    }


    getRefeicao(id: number): Promise<Refeicao> {
        return this.getRefeicoes()
            .then(refeicoes => refeicoes.find(refeicao => refeicao.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getRefeicaoByRestaurante(idRest: number, idRef: number): Promise<Refeicao> {
        return this.http.get(this.refeicoesUrl+`refeicao-by-restaurante/${idRest}/${idRef}`)
            .toPromise()
            .then(response => response.json() as Refeicao)
            .catch(this.handleError);
    };
}
