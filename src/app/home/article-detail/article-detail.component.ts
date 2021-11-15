import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: any;
  slug: any;
  constructor(private articlesService: ArticlesService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.articlesService.getSingleArticle(this.slug).subscribe(article => {
          this.article  = article.article;
          console.log(this.article)
        }
      )
    })
  }

  favoriteToggle() {
    if(!this.article.favorited) {
      this.articlesService.PostFavorited(this.article.slug).subscribe(article => {
        this.article  = article.article;
        console.log(article)
      })
    } else {
      this.articlesService.DeleteFovorited(this.article.slug).subscribe(article => {
        this.article  = article.article;
        console.log(article)
      })
    }

  }

  followToggle(){
    if(!this.article.author.following) {
      this.articlesService.followUser(this.article.author.username).subscribe(profile => {
        console.log(profile)
        this.article.author.following = !this.article.author.following
      })
    } else {
      this.articlesService.unfollowUser(this.article.author.username).subscribe(profile => {
        console.log(profile)
        this.article.author.following = !this.article.author.following
      })
    }
  }

}
