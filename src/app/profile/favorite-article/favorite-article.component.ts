import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-favorite-article',
  templateUrl: './favorite-article.component.html',
  styleUrls: ['./favorite-article.component.scss']
})
export class FavoriteArticleComponent implements OnInit {

  username!: string;
  posts: any;
  lengthFavoPosts!: number;
  isFavorited: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private articlesService: ArticlesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.username = data.user['username'];
      this.articlesService.getFavoriteArticle(this.username).subscribe((data) => {
        this.posts = data.articles;
        this.lengthFavoPosts = this.posts.length;
      })
    });
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
