import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private toastr: ToastrService = inject(ToastrService);
  private router: Router = inject(Router);

  /**
   * Login using email and password (returns an Observable)
   */
  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => {
        this.toastr.success('Logged In Successfully!');
        this.router.navigate(['/dashboard/home']);
      }),
      catchError((error) => {
        this.toastr.error('Wrong credentials, please try again!');
        return of(error); // Return an observable error response
      })
    );
  }

  /**
   * Returns an Observable of the current authentication state
   */
  loadUser(): Observable<any> {
    return authState(this.auth);
  }

  /**
   * Logout the user (returns an Observable)
   */
  logOut(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      tap(() => {
        this.toastr.success('Logged Out Successfully!');
        this.router.navigate(['/dashboard']);
      }),
      catchError((error) => {
        this.toastr.error('An Error has occurred, please try again!');
        return of(error); // Return an observable error response
      })
    );
  }
}
