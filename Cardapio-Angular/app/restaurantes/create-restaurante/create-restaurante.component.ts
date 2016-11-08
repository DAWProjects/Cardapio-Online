import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {Restaurante, RestauranteService} from "../shared/index";

import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import {Utilizador} from "../../utilizadores/shared/utilizador.model";
import {Estado_Restaurante} from "../../estado-restaurante/shared/estado_restaurante.model";


@Component({
    moduleId: module.id,
    selector: 'create-restaurante',
    templateUrl: 'create-restaurante.component.html',
    styleUrls: ['create-restaurante.component.css']


})


export class CreateRestauranteComponent implements OnInit{

    @Input()
    restaurante: Restaurante;
    utilizador: Utilizador;
    step: string='step1';
    creating:boolean=false;


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

// ----------------------------Image Uploader-------------------------------------
    src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 400
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }


    add( nome: string, numero: number, telefone: number, username: string, email: string, password: string, av_rua: string, card_img: string, logo: string, estado: Estado_Restaurante, lat:number, long:number): void {
         this.creating = true;

        this.utilizador= new Utilizador(username, email, password);
        this.restaurante = new Restaurante(nome,numero,telefone,email,av_rua, card_img, logo, estado, lat, long, this.utilizador);

        // this.utilizadorService.create(this.utilizador);
         this.restauranteService.create(this.restaurante);
      }
}