import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'show-unauthorized',
    templateUrl: 'unauthorized.component.html',
    styleUrls: ['unauthorized.component.css']

})
export class UnauthorizedComponent{


    constructor(private router: Router) {
    }

    inicio(){
        this.router.navigate(['/inicio']);
    }

}
