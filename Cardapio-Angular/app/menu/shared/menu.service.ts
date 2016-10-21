import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Menu } from './menu.model';
import {ConfigService} from "../../shared/utils/config.service";


@Injectable()
export class MenuService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private menuUrl = '';


    constructor(private http: Http,private configService: ConfigService) {
        this.menuUrl = configService.getApiURI();
    }

    getMenu(): Promise<Menu[]> {
        return this.http.get(this.menuUrl+'todos-menu')
            .toPromise()
            .then(response => response.json() as Menu[])
            .catch(this.handleError);
    };


    update(menu: Menu): Promise<Menu> {
        const url = `${this.menuUrl}todos-menu/${menu.id}`;

        return this.http
            .put(url, JSON.constructor(menu), {headers: this.headers})
            .toPromise()
            .then(() => menu)
            .catch(this.handleError);
    }

    create(menu: Menu): Promise<Menu> {
        const url = `${this.menuUrl+'criar-menu'}`;

        return this.http
            .post(url, JSON.constructor(menu), {headers: this.headers})
            .toPromise()
            .then(() => menu)
            .catch(this.handleError);
    }


    getRefeicao(id: number): Promise<Menu> {
        return this.getMenu().then(menu => menu.find(menu => menu.id === id));
    };

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro', error);
        return Promise.reject(error.message || error);
    }

    getMenuByRefeicao(idMenu: number, idRef: number): Promise<Menu> {
        return this.http.get(this.menuUrl+`menu-by-refeicao/${idMenu}/${idRef}`)
            .toPromise()
            .then(response => response.json() as Menu)
            .catch(this.handleError);
    };
}
