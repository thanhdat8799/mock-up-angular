import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../core/services/comment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() slug!: any;
  body = '';
  image!: string;
  defaultImg= "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png";
  comments: any;
  constructor(
    private commentService: CommentService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.image = data.user['image'] || this.defaultImg;
    })
    this.commentService.getComments(this.slug).subscribe((data) => {
      this.comments = data.comments;
      console.log(this.comments);
    })
  }
  onSubmit(addComment: NgForm) {
    const comments = {
      comment: {
        body: addComment.value.body,
      },
    };
    console.log(comments);
    this.commentService.createComment(this.slug, comments).subscribe(data => {
      this.commentService.getComments(this.slug).subscribe((data) => {
        this.comments = data.comments;
      })
    });
    this.body = "";
  }
  handleDelete(id: string): void {
    this.commentService.deleteComment(this.slug, id).subscribe((data) => {
      this.commentService.getComments(this.slug).subscribe((data) => {
        this.comments = data.comments;
      })
    })
  }
}
