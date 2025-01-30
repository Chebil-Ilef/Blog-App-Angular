import { ChangeDetectionStrategy,Component, Input, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { BlogPostWithId } from 'src/app/Models/BlogPostWithId.model';
import { Comment } from 'src/app/Models/Comment.model';
import { CommentsService } from 'src/app/services/comments.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, NgClass]
})
export class CommentFormComponent {

  @Input() postData!: BlogPostWithId

  commentService : CommentsService = inject(CommentsService)

  submitForm(commForm : NgForm){
    const commentData : Comment = {
      name : commForm.value.name,
      comment : commForm.value.comment,
      approved : false,
      postId : this.postData.id,
      postName : this.postData.title,
      createdAt : new Date()
    }
    this.commentService.saveData(commentData)
    commForm.reset()    
  }

}
