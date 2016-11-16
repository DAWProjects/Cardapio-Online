import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {LoginService} from '../../login/shared/login.service';

@Injectable()
export class RestauranteGuard implements CanActivate {

    private can: any;

    constructor(private auth: LoginService, private router: Router) {
    }

    canActivate() {
        if (!this.auth.isRestaurante()) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        else {
            return true;
        }
    }
}