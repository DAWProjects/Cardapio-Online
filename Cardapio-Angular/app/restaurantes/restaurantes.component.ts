import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService, Restaurante} from "./shared/index";


@Component({
    moduleId: module.id,
    selector: 'lista-restaurantes',
    templateUrl: 'restaurantes.component.html',
    styleUrls: ['restaurantes.component.css']

})
export class RestaurantesComponent implements OnInit {


    restaurantes: Restaurante[];
    public content_loaded: boolean = false;
    public criterioSelecionado: string = "nome";

    constructor(private router: Router, private restauranteService: RestauranteService) {
    }


    getRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }

    ngOnInit(): void {
        this.getRestaurantes();
    }

    gotoDetail(id: number): void {
        this.router.navigate(['/restaurante', id]);
    }


    changeCriteria(criteria: string): void{
        this.criterioSelecionado = criteria;
    }
}
