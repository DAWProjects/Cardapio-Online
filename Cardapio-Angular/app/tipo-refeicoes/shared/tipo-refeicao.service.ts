import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TipoRefeicao } from './tipo-refeicao.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class TipoRefeicaoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private tiposRefeicaoUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.tiposRefeicaoUrl = configService.getApiURI();
    }

    getTipoRefeicoes(): Promise<TipoRefeicao[]> {
        return this.http.get(this.tiposRefeicaoUrl+'todos-tipos-refeicao')
            .toPromise()
            .then(response => response.json() as TipoRefeicao[])
            .catch(this.handleError);
    };


    update(tipoRefeicao: TipoRefeicao): Promise<TipoRefeicao> {
        const url = `${this.tiposRefeicaoUrl}todos-tipos-refeicao/${tipoRefeicao.id}`;

        return this.http
            .put(url, JSON.constructor(tipoRefeicao), {headers: this.headers})
            .toPromise()
            .then(() => tipoRefeicao)
            .catch(this.handleError);
    }

    create(tipoRefeicao: TipoRefeicao): Promise<TipoRefeicao> {
        const url = `${this.tiposRefeicaoUrl+'criar-tipo-refeicoes'}`;

        return this.http
            .post(url, JSON.constructor(tipoRefeicao), {headers: this.headers})
            .toPromise()
            .then(() => tipoRefeicao)
            .catch(this.handleError);
    }


    getTipoRefeicoesSlowly(): Promise<TipoRefeicao[]> {
        return new Promise<TipoRefeicao[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getTipoRefeicoes());
    };

    getTipoRefeicao(id: number): Promise<TipoRefeicao> {
        return this.getTipoRefeicoes()
            .then(tipoRefeicoes => tipoRefeicoes.find(tipoRefeicao => tipoRefeicao.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
