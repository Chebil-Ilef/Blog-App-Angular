import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgFor, NgClass, RouterLink, PostCardComponent, AsyncPipe]
})
export class HomeComponent {

  blogPostsService : BlogPostsService = inject(BlogPostsService)
  featuredPosts$ : Observable<BlogPostWithId[]> = this.blogPostsService.getFeaturedPosts()
  latestPosts$ : Observable<BlogPostWithId[]> = this.blogPostsService.getLatestPosts()
}
