import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Restaurante} from "../shared/restaurante.model";
import {Refeicao} from "../../refeicao/shared/refeicao.model";
import {RestauranteService} from "../shared/restaurante.service";
@Component({
    moduleId: module.id,
    selector: 'show-restaurante',
    templateUrl: 'restaurante.component.html',
    styleUrls: ['restaurante.component.css']

})
export class RestauranteComponent implements OnInit {

    @Input()
    restaurante: Restaurante;
    refeicoes: Refeicao[];


    constructor(private route: ActivatedRoute,
                private restauranteService: RestauranteService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.restauranteService.getRestaurante(id)
                .then(restaurante => this.restaurante = restaurante);
        });
    }

    voltar(): void {
        window.history.back();
    };
}
