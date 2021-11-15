import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-new-articles',
  templateUrl: './new-articles.component.html',
  styleUrls: ['./new-articles.component.scss']
})
export class NewArticlesComponent implements OnInit {
  markdown ;
  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(addArticle: NgForm) {
     console.log(addArticle)
     let tags: string[] = addArticle.value.tag.split(';');
     const articles = {
        "article": {
        "title": addArticle.value.title,
        "description": addArticle.value.description,
        "body": addArticle.value.markdown,
        "tagList": tags
        }
      }
    console.log(articles);
    this.articlesService.createArticles(articles).subscribe(data => console.log(data));
    this.router.navigate(['/'])
  }
}
