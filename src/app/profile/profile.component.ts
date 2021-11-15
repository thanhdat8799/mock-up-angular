import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
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
  myPosts: any;
  favoritePosts: any;
  lengthMyPosts!: number;
  lengthFavoPosts!: number;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private articlesService: ArticlesService,
  ) {
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.username = data.user['username'];
      this.image = data.user['image'];
      this.bio = data.user['bio'];
      this.articlesService.getMyArticle(this.username).subscribe((data) => {
        this.myPosts = data.articles;
        this.lengthMyPosts = this.myPosts.length;
      })
      this.articlesService.getFavoriteArticle(this.username).subscribe((data) => {
        this.favoritePosts = data.articles;
        this.lengthFavoPosts = this.favoritePosts.length;
      })
    });
  }
}
