import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService, Restaurante} from "./shared/index";
@Component({
    moduleId: module.id,
    selector: 'lista-restaurantes',
    templateUrl:'restaurantes.component.html',
    styleUrls:['restaurantes.component.css']

})
export class RestaurantesComponent implements OnInit{


    restaurantes : Restaurante[];

    constructor(private router: Router, private restauranteService: RestauranteService){}


    getRestaurantes() : void{
        this.restauranteService.getRestaurantes().then(restaurantes => this.restaurantes = restaurantes);
    }

    ngOnInit(): void {
        this.getRestaurantes();
    }
}
