import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";
import {TipoRefeicaoService, TipoRefeicao} from "../../tipo-refeicoes/shared/index";
import {Refeicao} from "../../refeicoes/shared/refeicao.model";
import {RefeicaoService} from "../../refeicoes/shared/refeicao.service";
import {Menu} from "../../menu/shared/menu.model";


@Component({
    moduleId: module.id,
    selector: 'dashboard-restaurante',
    templateUrl: 'dashboard-restaurante.component.html',
    styleUrls: ['dashboard-restaurante.component.css']


})


export class DashBoardRestauranteComponent implements OnInit{

    @Input()
    restaurante: Restaurante;
    tiposrefeicao: TipoRefeicao[];
    refeicao:Refeicao;
    menu:Menu;
    selectedTipo: TipoRefeicao;
    selectedOpcao: string='Refeicoes';
    creating:boolean=false;


    constructor(private route: ActivatedRoute,
                private restauranteService: RestauranteService ,
                private tiporefeicaoService: TipoRefeicaoService,
                private refeicaoService: RefeicaoService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.restauranteService.getRestaurante(id)
                .then(restaurante => this.restaurante = restaurante);
        });
        this.getTiposrefeicao();
     }

    getTiposrefeicao(): void {
        this.tiporefeicaoService.getTipoRefeicoes()
            .then(tiposrefeicao => this.tiposrefeicao = tiposrefeicao)
            .then(tiposrefeicao => this.selectedTipo = tiposrefeicao[0]);
    }



    onOpt(opcao: string): void{
        this.selectedOpcao = opcao;
    }

    voltar(): void {
        window.history.back();
    };

    addNew(designacao: string, tipo: number, descricao: string, imagem: string, preco: number, hora_inicio: any, hora_fim: any, restaurante: number, refeicao:number): void {
        this.creating = true;
        if (designacao == '')
            return;

        this.refeicao = new Refeicao(designacao, tipo);
        this.menu = new Menu(descricao, imagem, preco, hora_inicio, hora_fim, restaurante, refeicao);

        this.refeicaoService.create(this.refeicao);
        this.menuService.create(this.menu);
    }

}





