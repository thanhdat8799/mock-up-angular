import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {

  @Input() username!: string;
  @Input() isMe: boolean;
  posts: any;
  lengthMyPosts!: number;
  isFavorited: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private articlesService: ArticlesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.articlesService.getMyArticle(this.username).subscribe((data) => {
      this.posts = data.articles;
      this.lengthMyPosts = this.posts.length;
    })
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

  handleDelete(post){
    this.articlesService.deleteArticle(post.slug).subscribe(data => {
      console.log("delete success" + data)
      this.articlesService.getMyArticle(this.username).subscribe((data) => {
        this.posts = data.articles;
        this.lengthMyPosts = this.posts.length;
      })
    })
  }
}
