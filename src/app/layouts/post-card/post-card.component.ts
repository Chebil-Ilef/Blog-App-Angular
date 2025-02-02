import { ChangeDetectionStrategy,Component, Input } from '@angular/core';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { TimestampToDatePipe } from '../../pipes/timestamp-to-date.pipe';
import { RouterLink } from '@angular/router';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, RouterLink, DatePipe, TimestampToDatePipe]
})
export class PostCardComponent {
  @Input() postInfo!: BlogPostWithId
}
