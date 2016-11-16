import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Refeicao, RefeicaoService} from "../shared/index";
import {TipoRefeicao, TipoRefeicaoService} from '../../tipo-refeicoes/shared/index'
import {Restaurante, RestauranteService} from "../../restaurantes/shared/index";


@Component({
    moduleId: module.id,
    selector: 'show-refeicao',
    templateUrl: 'refeicao.component.html',
    styleUrls: ['refeicao.component.css']

})
export class RefeicaoComponent implements OnInit {

    @Input()
    public refeicao: Refeicao;
    public tiposrefeicao: TipoRefeicao[];
    public restaurante: Restaurante;
    public creating:boolean;

    constructor(private route: ActivatedRoute,
                private refeicaoService: RefeicaoService,
                private restauranteService: RestauranteService,
                private tiporefeicaoService: TipoRefeicaoService) {
    }

    ngOnInit(): void {
        this.getRefeicao();
        this.getRestaurante();
        // this.getTiposrefeicao();
    }

    voltar(): void {
        window.history.back();
    };

    getRefeicao() {
        this.route.params.forEach((params: Params) => {
            let idRestaurante = +params['idRestaurante'];
            let idRefeicao = +params['idRefeicao'];
            this.refeicaoService.getRefeicaoByRestaurante(idRestaurante, idRefeicao)
                .then(refeicao => this.refeicao = refeicao);
        });
    }


    getRestaurante() {
        this.route.params.forEach((params: Params) => {
            let idRestaurante = +params['idRestaurante'];
            this.restauranteService.getRestaurante(idRestaurante)
                .then(restaurante => this.restaurante = restaurante);
        });
    }

    getTiposrefeicao(): void {
        this.tiporefeicaoService.getTipoRefeicoes()
            .then(tiposrefeicao => this.tiposrefeicao = tiposrefeicao);
    }
}
