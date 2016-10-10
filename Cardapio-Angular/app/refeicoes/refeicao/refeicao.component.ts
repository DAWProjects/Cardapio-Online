import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Refeicao, RefeicaoService} from "../shared/index";

import {TipoRefeicao, TipoRefeicaoService} from '../../tipo-refeicoes/shared/index'


@Component({
    moduleId: module.id,
    selector: 'show-refeicao',
    templateUrl: 'refeicao.component.html',
    styleUrls: ['refeicao.component.css']

})
export class RefeicaoComponent implements OnInit {

    @Input()
    refeicao: Refeicao;
    tiposrefeicao: TipoRefeicao[];

    constructor(private route: ActivatedRoute,
                private refeicaoService: RefeicaoService,
                private tiporefeicaoService: TipoRefeicaoService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let idRestaurante = +params['idRestaurante'];
            let idRefeicao = +params['idRefeicao'];

            this.refeicaoService.getRefeicaoByRestaurante(idRestaurante,idRefeicao)
                .then(refeicao => this.refeicao = refeicao);
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
