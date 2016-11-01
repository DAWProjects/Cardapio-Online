import {Component, OnInit} from '@angular/core';
import {Consumidor, ConsumidorService} from '../shared/index';
import {Router} from '@angular/router';
import {LoginService} from "../../login/shared/login.service";

@Component({
    moduleId: module.id,
    selector: 'signup-consumidor',
    templateUrl: 'consumidor.component.html',
    styleUrls: ['consumidor.component.css']

})
export class ConsumidorComponent implements OnInit {

    consumidor: Consumidor;

    constructor(private router: Router,
                private consumidorService: ConsumidorService,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
    }


    add(nome: string, email: string, password: string, telefone: string): void {

        this.consumidor = new Consumidor(nome, "M", telefone);
         this.signup(this.consumidor, email, password);
    }


    signup(consumidor: Consumidor, email, password) {
        this.loginService.signup(consumidor, email, password)
            .subscribe(resultado => {
                if (resultado !== null) {
                    this.voltar();
                }
                else {
                    //
                    // TODO
                    // Pegar o erro do server
                }
            });

    }


    voltar(): void {
        this.router.navigate(['/inicio']);
    }


}
