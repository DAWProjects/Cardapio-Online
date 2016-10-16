import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";


@Component({
    moduleId: module.id,
    selector: 'dashboard-restaurante',
    templateUrl: 'dashboard-restaurante.component.html',
    styleUrls: ['dashboard-restaurante.component.css']


})


export class DashBoardRestauranteComponent implements OnInit{

    @Input()
    restaurant: Restaurante;
    selectedOpcao: string='Refeicoes';


    constructor(private route: ActivatedRoute,
                private restauranteService: RestauranteService ) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.restauranteService.getRestaurante(id)
                .then(restaurant => this.restaurant = restaurant);
        });
     }


    onOpt(opcao: string): void{
        this.selectedOpcao = opcao;
    }

}






