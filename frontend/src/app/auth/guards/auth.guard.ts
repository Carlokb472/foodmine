// import { CanActivateFn, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// import { Inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { UserService } from '../../services/user.service';
// export const authGuardFactory: () => CanActivateFn = () => {
//   const userService = Inject(UserService);
//   const router = Inject(Router);

//   return (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
//     if (userService.currentUser?.token) {
//       return true;
//     }

//     router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   };
// };


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userService.currentUser.token) return true;

    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
    return false;
  }

}