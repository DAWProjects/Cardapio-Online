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
    public estrelas : number = 3.5;

    constructor(private route: ActivatedRoute, private restauranteService: RestauranteService) {
    }


    ngOnInit(): void {
        this.getRestaurantes();
    }

    getRestaurantes(): void {

        this.route.params.forEach((params: Params) => {

            if(params['criterio'] === 'preco')
            this.getRestaurantesPorPreco(params['valor']);

            else if(params['criterio'] === 'nome')
                this.getRestaurantesPorNome(params['valor']);

            else if(params['criterio'] === 'cidade')
                this.getRestaurantesPorCidade(params['valor']);
        });
    }

    changeCriteria(criteria: string): void {
        this.criterioSelecionado = criteria;
    }



    getRestaurantesPorPreco(preco: number) {
        this.restauranteService.getRestaurantesPorPreco(preco)
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }

    getRestaurantesPorNome(nome: string) {
        this.restauranteService.getRestaurantesPorNome(nome)
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }


    getRestaurantesPorCidade(cidade: string) {
        this.restauranteService.getRestaurantesPorCidade(cidade)
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }
}
