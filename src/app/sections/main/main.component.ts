import { Component } from '@angular/core';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { SubscriptionFormComponent } from '../../pages/subscription-form/subscription-form.component';
import { RouterOutlet } from '@angular/router';
import { CategoryNavbarComponent } from '../../layouts/category-navbar/category-navbar.component';
import { HeaderComponent } from '../../shared-components/header/header.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: true,
    imports: [HeaderComponent, CategoryNavbarComponent, RouterOutlet, SubscriptionFormComponent, FooterComponent]
})
export class MainComponent {

}
