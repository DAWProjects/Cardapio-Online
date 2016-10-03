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
    public content_loaded: boolean;

    constructor(private router: Router, private restauranteService: RestauranteService){
        this.content_loaded = false;
    }


    getRestaurantes() : void{
        this.restauranteService.getRestaurantes().then(restaurantes => this.restaurantes = restaurantes);
        this.content_loaded = true;
    }

    ngOnInit(): void {
        this.getRestaurantes();
    }

    gotoDetail(id:number): void {
        this.router.navigate(['/restaurante', id]);
    }
}
