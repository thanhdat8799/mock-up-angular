import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../core/services/comment.service';
import { Comment } from '../../core/models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  comments: any;
  @Input() slug!: any;
  constructor(
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.commentService.getComments(this.slug).subscribe((data) => {
      this.comments = data;
      console.log(this.comments);
    })
  }
}
