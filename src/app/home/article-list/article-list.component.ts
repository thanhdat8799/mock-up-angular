import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() posts: any;
  @Input() isFavorited: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    
    // for(let post of this.posts) {
    //   this.isFavorited = post.favorited;
    // }
  }
  handleLike(post: any) {
    const slug = post.slug;
    this.userService.ischeckLogin.subscribe(data => {
      if(data == false){
        if(confirm("Hãy đăng nhập để có thể like bài viết")){
          this.router.navigate(['/auth', 'login']);
        }
        else{
          return;
        }
      }
      else{
        if(post.favorited == false){
          this.articlesService.PostFavorited(slug).subscribe(data => {
            const article = data;
            for(let i = 0; i< this.posts.length; i++){
              if(this.posts[i].slug == article.article.slug){
                this.posts[i] = article.article;
                break;
              }
            }
          })
        }
        else{
          this.articlesService.DeleteFovorited(slug).subscribe(data =>{
            const article = data;
            for(let i = 0; i< this.posts.length; i++){
              if(this.posts[i].slug == article.article.slug){
                this.posts[i] = article.article;
                break;
              }
            }
          })
        }
      }
    })
  }
}
