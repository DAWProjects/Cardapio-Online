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

    // ismeridian:boolean = true;
    // ismeridian1:boolean = true;
    isEnabled:boolean = true;
    isEnabled1:boolean = true;
    horaAbertura:Date = new Date("October 13, 2014 08:00:00");
    horaFecho:Date = new Date("October 13, 2014 22:00:00");

    dia:string;


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

// ------------------Time Picker-------------------


    //------------Aberto-------------------
    // public toggleModeA():void {
    //     this.ismeridian = !this.ismeridian;
    // };

    public setAberto():void {

        let d = new Date("October 13, 2014 08:00:00");
        this.horaAbertura = d;
    };

    public changedAberto():void {
        console.log('Time changed to: ' + this.horaAbertura);
    };

    //------------Fechado-----------------
    // public toggleModeF():void {
    //     this.ismeridian1 = !this.ismeridian1;
    // };

    public setFechado():void {
        let d = new Date("October 13, 2014 22:00:00");
        this.horaFecho = d;
     };

    public changedFechado():void {
        console.log('Time changed to: ' + this.horaFecho);
    };

    add( nome: string,
         telefone: number,
         cidade:string,
         av_rua: string,
         numero:number,
         lat:number,
         long:number,
         imagem:string
    ): void {

        // this.creating = true;
        // this.utilizador= new Utilizador(username, email, password);
        this.restaurante = new Restaurante(nome,telefone, cidade, av_rua, numero, lat, long, imagem,imagem, 1, 1);

        // this.utilizadorService.create(this.utilizador);
        this.restauranteService.create(this.restaurante).then(this.voltar);
    }

    voltar(): void {
        window.history.back();
    };
}