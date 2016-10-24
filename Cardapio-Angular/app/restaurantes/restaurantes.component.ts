import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService, Restaurante} from "./shared/index";


@Component({
    moduleId: module.id,
    selector: 'lista-restaurantes',
    templateUrl: 'restaurantes.component.html',
    styleUrls: ['restaurantes.component.css']

})
export class RestaurantesComponent implements OnInit {


    restaurantes: Restaurante[];
    public content_loaded: boolean = false;
    public estrelas : number = 4.5;
    public criterioSelecionado: string = "nome";
    public currentPage:number = 1;
    public rows: any[];

    constructor(private router: Router, private restauranteService: RestauranteService) {
    }


    getRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .then(restaurantes => this.restaurantes = restaurantes)
            .then(() => this.content_loaded = true);
    }

    ngOnInit(): void {
        this.getRestaurantes();
    }

    gotoDetail(id: number): void {
        this.router.navigate(['/restaurante', id]);
    }


    changeCriteria(criteria: string): void{
        this.criterioSelecionado = criteria;
    }

    public pageChanged(event:any):void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.currentPage = event.page;
    };
}
