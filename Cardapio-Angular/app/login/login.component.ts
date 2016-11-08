import {Component} from '@angular/core';
import {Consumidor, ConsumidorService} from '../consumidores/shared/index';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login-user',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']

})
export class LoginComponent {

  model: any = {};
  error : string = '';
  consumidor: Consumidor;

  constructor(private router: Router,
              private consumidorService: ConsumidorService) {
  }

  login(){
    this.consumidorService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/inicio']);
                } else {
                    this.error = 'Username or password incorrecto';
                }
            });

  }

}
