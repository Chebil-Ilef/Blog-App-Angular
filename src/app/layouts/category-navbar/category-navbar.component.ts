import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryWithId } from 'src/app/Models/CategoryWithId.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-category-navbar',
    templateUrl: './category-navbar.component.html',
    styleUrls: ['./category-navbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe]
})
export class CategoryNavbarComponent {
  private categoryService : CategoriesService = inject(CategoriesService)
  categories$ : Observable<CategoryWithId[]> = this.categoryService.loadData()
}