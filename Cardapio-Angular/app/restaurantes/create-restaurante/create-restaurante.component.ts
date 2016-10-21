import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";


@Component({
    moduleId: module.id,
    selector: 'create-restaurante',
    templateUrl: 'create-restaurante.component.html',
    styleUrls: ['create-restaurante.component.css']


})


export class CreateRestauranteComponent implements OnInit{

    @Input()
    restaurante: Restaurante;
    step: string='step1';


    constructor(private route: ActivatedRoute,
                private restauranteService: RestauranteService ) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.restauranteService.getRestaurante(id)
                .then(restaurant => this.restaurante = restaurant);
        });
    }


    onOpt(step: string): void{
        this.step = step;
    }

}






