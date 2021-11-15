import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { PagenationService } from 'src/app/core/services/pagenation.service';
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
  id: any
  articleCount: number = 0;
  articleCountFeed: number = 0;
  isFavorited: any;
  constructor(private articlesService: ArticlesService,
    private userService: UserService,
    private router: Router,
    private pagenationService: PagenationService
    ) { }

  ngOnInit(): void {
    this.articlesService.getArticlesGlobal().subscribe(data => {
      this.data = data; this.posts = data.articles; this.articleCount = data.articlesCount; console.log(this.articleCount)
    });
    this.articlesService.getTags().subscribe(data => {this.tags = data.tags})
    this.userService.ischeckLogin.subscribe(data => this.isCheckLogin = data);
    this.userService.ischeckLogin.subscribe(data => {
      if(data == true){
        this.articlesService.getArticleFeed().subscribe(data => {
          this.data1 = data; 
          this.post1 = this.data1.articles; 
          this.articleCountFeed = this.data1.articlesCount;
          console.log(data)
        })
      }
    })
  }
  handlePage(index: number): void {
    const index1 = (index - 1) * 20;
     this.articlesService.getArticleByPage(20, index1).subscribe(data => {
      this.data = data; this.posts = data.articles; this.articleCount = data.articlesCount; console.log(this.articleCount)
     })
  }
  handlePage1(index: number): void {
    const index1 = (index - 1) * 20;
     this.articlesService.getArticleByPage1(20, index1).subscribe(data => {
      this.data1 = data; this.post1 = data.articles; this.articleCountFeed = data.articlesCount; console.log(this.articleCount)
     })
  }
  handleTag(tag: string) {
    console.log(tag)
     this.articlesService.getArticleByTag(tag).subscribe(data => {
      this.data = data; this.posts = data.articles; this.articleCount = data.articlesCount;
     })
  }
  handleTag1(tag: string){
    console.log(tag);
    this.articlesService.getArticleByTag(tag).subscribe(data => {
      this.data1 = data; this.post1 = data.articles; this.articleCountFeed = data.articlesCount;
     })
  }
}
