import { ChangeDetectionStrategy,Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink]
})
export class ErrorPageComponent {

}
