import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import {DocumentSnapshot} from '@angular/fire/firestore'
import {
  concatMap,
  map,
  scan,
  catchError,
  of,
  tap,
  takeWhile,
} from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

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
  
// Observable for accumulating latest posts
latestPosts$: Observable<BlogPostWithId[]> = this.paginationSubject.pipe(
  takeWhile(
    ({ lastVisibleDoc }) => lastVisibleDoc !== null,
    true
  ),
  concatMap(({ limit, lastVisibleDoc }) =>
    this.blogPostsService.getLatestPosts(limit, lastVisibleDoc).pipe(
      tap((data) => {
        this.totalPosts = data.total;
        console.log('Fetched posts:', data.posts);
        console.log('Last visible document:', data.lastVisible);

        // Update the lastVisibleDoc in the paginationSubject
        if (data.lastVisible) {
          this.paginationSubject.next({ limit, lastVisibleDoc: data.lastVisible });
        }
      }),
      map((data) => ({ posts: data.posts, lastVisibleDoc: data.lastVisible })),
      catchError(() => of({ posts: [], lastVisibleDoc: null }))
    )
  ),
  scan(
    (acc, { posts, lastVisibleDoc }) => {
      console.log('Scan - lastVisibleDoc:', lastVisibleDoc); // Debugging log
      // Accumulate posts
      const newPosts = [...acc, ...posts];
      return newPosts;
    },
    [] as BlogPostWithId[]
  )
);

loadMore(): void {
  console.log('Load More button clicked'); // Debugging log
  const { limit, lastVisibleDoc } = this.paginationSubject.value;
  console.log('getLatestPosts - limit:', limit, 'lastVisibleDoc:', lastVisibleDoc);
  if (lastVisibleDoc !== null) {
    this.paginationSubject.next({ limit, lastVisibleDoc });
  }
}
}

