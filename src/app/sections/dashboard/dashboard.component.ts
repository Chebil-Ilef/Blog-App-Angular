import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [NgClass, RouterLinkActive, RouterLink, RouterOutlet]
})
export class DashboardComponent  {
private route=inject(ActivatedRoute)

  toggleActive: boolean = true;
  currcomponent: string= "dashboard"
  toggleMenu() {
    this.toggleActive = !this.toggleActive;
  }

  
  private authService : AuthService = inject(AuthService)


  onLogout(){
    this.authService.logOut()
  }
}