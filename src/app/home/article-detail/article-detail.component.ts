import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article = {
    "slug": "demo-3l4c06",
    "title": "demo ",
    "description": "demo",
    "body": "sdfasdf\ndsfad\n\nfdadsf\n\nfsdfafsda\n\nafdssaf\nfdaf\n```\nthis is some code\n```\n\n# home component",
    "createdAt": "2021-11-13T04:05:03.917Z",
    "updatedAt": "2021-11-13T04:05:03.917Z",
    "tagList": [
        "javascript"
    ],
    "favorited": false,
    "favoritesCount": 0,
    "author": {
        "username": "jay",
        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
        "following": false
    }
  };
  slug!: string;
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

}
