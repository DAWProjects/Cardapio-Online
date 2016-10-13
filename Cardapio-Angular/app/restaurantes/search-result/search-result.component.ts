import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RestauranteService, Restaurante} from "../shared/index";


@Component({
    moduleId: module.id,
    selector: 'search-result-restaurantes',
    templateUrl: 'search-result.component.html',
    styleUrls: ['search-result.component.css']

})
export class SearchResultRestaurantesComponent implements OnInit {


    restaurantes: Restaurante[];
    public content_loaded: boolean = false;
    public criterioSelecionado: string = "nome";

    constructor(private route: ActivatedRoute, private restauranteService: RestauranteService) {
    }


    ngOnInit(): void {
        this.getRestaurantes();
    }

    getRestaurantes(): void {

        this.route.params.forEach((params: Params) => {
            let preco = +params['preco'];
            this.restauranteService.getRestaurantesPorPreco(preco)
                .then(restaurantes => this.restaurantes = restaurantes)
                .then(() => this.content_loaded = true);
        });
    }

    changeCriteria(criteria: string): void {
        this.criterioSelecionado = criteria;
    }
}
