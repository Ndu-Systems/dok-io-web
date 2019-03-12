import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CURRENT_USER } from '.';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
   
      if (localStorage.getItem(CURRENT_USER)) {
          return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}
