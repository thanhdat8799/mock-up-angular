import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  slug: any;
  body = '';
  constructor(
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });
  }
  onSubmit(addComment: NgForm) {
    const comments = {
      comment: {
        body: addComment.value.body,
      },
    };
    console.log(comments);
    this.commentService.createComment(this.slug, comments).subscribe(data => console.log(data));
    this.body = "";
  }

}
