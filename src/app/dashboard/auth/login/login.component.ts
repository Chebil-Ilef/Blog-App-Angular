import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FooterComponent } from '../../../shared-components/footer/footer.component';
import { NgClass } from '@angular/common';
import { HeaderComponent } from '../../../shared-components/header/header.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, FormsModule, NgClass, FooterComponent]
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) return; // Prevent submission if form is invalid

    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe();
  }
}
