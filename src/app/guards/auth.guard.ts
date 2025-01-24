import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
export const authGuard: CanActivateFn = (route, state) => {
  let authService : AuthService = inject(AuthService)
  let router : Router = inject(Router)
  return authService.loadUser().pipe(
    map(user=>{
      if(user)
        return true;
      else
        router.navigate(['/dashboard'])
        return false;  
    })
  );
};