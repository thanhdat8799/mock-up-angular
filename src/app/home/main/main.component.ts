import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public isCheckLogin: boolean = true;
  data: any
  data1: any
  posts: any;
  post1: any
  tags:any;
  constructor(private articlesService: ArticlesService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.articlesService.getArticlesGlobal().subscribe(data => {this.data = data; this.posts = data.articles});
    this.articlesService.getTags().subscribe(data => {this.tags = data.tags})
    this.userService.ischeckLogin.subscribe(data => this.isCheckLogin = data);
    this.articlesService.getArticleFeed().subscribe(data => {this.data1 = data; this.post1 = this.data1.article})
  }

}
