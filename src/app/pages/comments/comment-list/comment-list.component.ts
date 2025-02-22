import { ChangeDetectionStrategy,Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { CommentWithId } from 'src/app/Models/CommentWithId.model';
import { CommentsService } from 'src/app/services/comments.service';
import { TimestampToDatePipe } from '../../../pipes/timestamp-to-date.pipe';
import { NgIf, NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe, DatePipe, TimestampToDatePipe]
})
export class CommentListComponent implements OnInit {

  @Input() postData!: BlogPostWithId

  commentService : CommentsService = inject(CommentsService)

  commentList$ !: Observable<CommentWithId[]>

  ngOnInit(): void {
    this.commentList$ = this.commentService.loadData(this.postData.id)
  }


}
