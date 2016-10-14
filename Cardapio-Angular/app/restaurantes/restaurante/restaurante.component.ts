import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";

import {TipoRefeicao, TipoRefeicaoService} from '../../tipo-refeicoes/shared/index'
import {Refeicao} from "../../refeicoes/shared/refeicao.model";


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
    selectedTipo: TipoRefeicao;
    selectedRefeicao: Refeicao;
    selectedOpcao: string='Todas';

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
            .then(tiposrefeicao => this.tiposrefeicao = tiposrefeicao)
            .then(tiposrefeicao => this.selectedTipo = tiposrefeicao[0]);
    }


    onSelect(tiporefeicao: TipoRefeicao): void {
        this.selectedTipo = tiporefeicao;
    }

    onSelectRefeicao(refeicao: Refeicao): void {
        this.selectedRefeicao = refeicao;
    }

    onOpt(opcao: string): void{
        this.selectedOpcao = opcao;
    }

}
