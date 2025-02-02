import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink, NgIf, AsyncPipe]
})
export class HeaderComponent {

  private authService : AuthService = inject(AuthService)
  loggedInUser$ : Observable<User | null> = this.authService.loadUser()
  onLogout(){
    this.authService.logOut()
  }
}