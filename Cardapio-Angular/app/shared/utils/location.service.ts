import {Injectable}    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

import {ConfigService} from "./config.service";
import {Utilizador} from "../../utilizadores/shared/utilizador.model";


@Injectable()
export class LocationService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private locationUrl = '';


    constructor(private http: Http, private configService: ConfigService) {
        this.locationUrl = configService.getApiURI();
    }

    public getUserLocation(): Observable<any> {


        return this.http.get(this.locationUrl + `user-location`)
            .map((response: Response) => {
                return response.json().geoLocation;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Erro do servidor'));

    }

}
