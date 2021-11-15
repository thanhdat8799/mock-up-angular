import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { ArticlesService } from '../core/services/articles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username!: string;
  bio!: string;
  image!: string;
  isMe!: boolean;
  profile: any;
  myPosts: any;
  favoPosts: any;
  lengthMyPosts!: number;
  lengthFavoPosts!: number;
  isFavorited: any;
  defaultImg= "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png";
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params.name;
      this.authService.getCurrentUser().subscribe(user=> {
        this.isMe = this.username == user.user.username;
        console.log(this.isMe ? "yes, its mah profile" : "nah, not my profile" + "its: " + this.username)
      })
      this.authService.getProfile(this.username).subscribe((data) => {
        this.image = data.profile['image'] || this.defaultImg;
        this.bio = data.profile['bio'];
        this.profile = data.profile;
      })
    })
    this.articlesService.getMyArticle(this.username).subscribe((data) => {
      this.myPosts = data.articles;
      this.lengthMyPosts = this.myPosts.length;
    })
    this.articlesService.getFavoriteArticle(this.username).subscribe((data) => {
      this.favoPosts = data.articles;
      this.lengthFavoPosts = this.favoPosts.length;
    })
  }

  followToggle(){
    if(!this.profile.following) {
      this.articlesService.followUser(this.profile.username).subscribe(profile => {
        console.log(profile)
        this.profile.following = !this.profile.following
      })
    } else {
      this.articlesService.unfollowUser(this.profile.username).subscribe(profile => {
        console.log(profile)
        this.profile.following = !this.profile.following
      })
    }
  }
  handleLike(post: any) {
    const slug = post.slug;
    if(post.favorited == false){
      this.articlesService.PostFavorited(slug).subscribe(data => {
        const article = data;
        for(let i = 0; i < this.myPosts.length; i++){
          if(this.myPosts[i].slug == article.article.slug){
            this.myPosts[i] = article.article;
            break;
          }
        }
        for(let i = 0; i < this.favoPosts.length; i++){
          if(this.favoPosts[i].slug == article.article.slug){
            this.favoPosts[i] = article.article;
            break;
          }
        }
        this.articlesService.getFavoriteArticle(this.username).subscribe((data) => {
          this.favoPosts = data.articles;
          this.lengthFavoPosts = this.favoPosts.length;
        })
      })
    }
    else{
      this.articlesService.DeleteFovorited(slug).subscribe(data =>{
        const article = data;
        for(let i = 0; i< this.myPosts.length; i++){
          if(this.myPosts[i].slug == article.article.slug){
            this.myPosts[i] = article.article;
            break;
          }
        }
        for(let i = 0; i< this.favoPosts.length; i++){
          if(this.favoPosts[i].slug == article.article.slug){
            this.favoPosts.splice(i, 1);
            break;
          }
        }
      })
    }
  }
  handleDelete(post: any){
    this.articlesService.deleteArticle(post.slug).subscribe(data => {
      console.log("delete success" + data)
      this.articlesService.getMyArticle(this.username).subscribe((data) => {
        this.myPosts = data.articles;
        this.lengthMyPosts = this.myPosts.length;
      })
    })
  }
}
