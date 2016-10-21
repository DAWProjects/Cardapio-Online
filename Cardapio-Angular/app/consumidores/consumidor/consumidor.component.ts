import {Component, OnInit} from '@angular/core';
import {Consumidor, ConsumidorService} from '../shared/index';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'signup-consumidor',
    templateUrl: 'consumidor.component.html',
    styleUrls: ['consumidor.component.css']

})
export class ConsumidorComponent implements OnInit{

    consumidor: Consumidor;

    constructor(private router: Router,
                private consumidorService: ConsumidorService) {
    }


    add(nome: string, email: string, password: string, telefone: string): void {

        this.consumidor = new Consumidor(nome, "M", telefone, email, password);
        this.consumidorService.create(this.consumidor).then(() => this.voltar());
    }

    voltar(): void {
        this.router.navigate(['/inicio']);
    }


    ngOnInit(): void {
    }

}
