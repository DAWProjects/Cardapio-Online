import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";

import {TipoRefeicao, TipoRefeicaoService} from '../../tipo-refeicoes/shared/index'


@Component({
    moduleId: module.id,
    selector: 'show-restaurante',
    templateUrl: 'restaurante.component.html',
    styleUrls: ['restaurante.component.css']

})
export class RestauranteComponent implements OnInit {

    @Input()
    restaurante: Restaurante;
    tiposrefeicao: TipoRefeicao[];

    constructor(private route: ActivatedRoute,
                private restauranteService: RestauranteService,
                private tiporefeicaoService: TipoRefeicaoService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.restauranteService.getRestaurante(id)
                .then(restaurante => this.restaurante = restaurante);
        });
        this.getTiposrefeicao();
    }

    voltar(): void {
        window.history.back();
    };

    getTiposrefeicao(): void {
        this.tiporefeicaoService.getTipoRefeicoes()
            .then(tiposrefeicao => this.tiposrefeicao = tiposrefeicao);
    }
}
