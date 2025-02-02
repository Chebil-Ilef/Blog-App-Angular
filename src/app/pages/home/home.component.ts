import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, BehaviorSubject, take, switchMap } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import {DocumentData, DocumentSnapshot} from '@angular/fire/firestore'
import {
  map,
  scan,
  catchError,
  of,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink, PostCardComponent, AsyncPipe],
})

export class HomeComponent {
  blogPostsService: BlogPostsService = inject(BlogPostsService);

  featuredPosts$: Observable<BlogPostWithId[]> = this.blogPostsService.getFeaturedPosts();

  // BehaviorSubject to manage pagination state for latest posts
  paginationSubject = new BehaviorSubject<{ limit: number; lastVisibleDoc: DocumentSnapshot | null }>({
    limit: 4,
    lastVisibleDoc: null, 
  });

  totalPosts = 0;

  lastVisiblePost: DocumentSnapshot<DocumentData| DocumentData> | null = null;

  totalPosts$ = this.blogPostsService.getTotalPostsCount().pipe(
    map((response) => response.size),
    take(1),
    tap((response) => {this.totalPosts = response})
  ).subscribe();

// Observable for accumulating latest posts
latestPosts$: Observable<BlogPostWithId[]> = this.paginationSubject.pipe(
  switchMap(({ limit, lastVisibleDoc }) =>
    this.blogPostsService.getLatestPosts(limit, lastVisibleDoc)
  ),
  tap((data) => {
      this.lastVisiblePost = data.lastVisible
  }),
  map((data) => data.posts),
  scan(
    (acc, posts) => {
      // Accumulate posts
      const newPosts = [...acc, ...posts];
      return newPosts;
    },
    [] as BlogPostWithId[]
  ),
  catchError(() => of([]))
);

loadMore(): void {
  const limit = this.paginationSubject.value.limit;
  const lastVisibleDoc = this.lastVisiblePost;
  if (lastVisibleDoc !== null) {
    this.paginationSubject.next({ limit, lastVisibleDoc });
  }
}
}

