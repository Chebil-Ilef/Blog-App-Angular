import { ChangeDetectionStrategy,Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription, map } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-single-category',
    templateUrl: './single-category.component.html',
    styleUrls: ['./single-category.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgFor, PostCardComponent, AsyncPipe]
})

export class SingleCategoryComponent implements OnInit{

  route : ActivatedRoute = inject(ActivatedRoute)
  blogPostsService : BlogPostsService = inject(BlogPostsService)
  categoryPosts$!: Observable<BlogPostWithId[]>
  categoryData : string | null = null

  ngOnInit(): void {
    this.categoryData = this.route.snapshot.data['categoryName'];
    this.categoryPosts$ = this.route.data.pipe(
      map(data => data['categoryPosts'])
    );
  }

}