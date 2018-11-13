import { Injectable } from "@angular/core";
import { CanActivate, Router, CanLoad } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (this.authService.isAuth()) {
            return true;
        }

        this.router.navigate(['/login']);
    }

    canLoad() {
        if (this.authService.isAuth()) {
            return true;
        }

        this.router.navigate(['/login']);
    }
}