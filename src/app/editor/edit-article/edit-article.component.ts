import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  data: any;
  article: any
  markdown = '';
  tag = '';
  slug: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params =>{
    //   const id = params.get('id');
    //   this.articlesService.getArticleBySlug(id).subscribe(data => {
    //     this.data = data;
    //     this.article = data.article;
    //   })
    // })
    this.articlesService.getArticleBySlug('hoc-sinh-ngheo-vuot-kho-ghl9up').subscribe(data => {
        this.data = data;
        this.article = data.article;
        this.markdown = this.article.body;
        this.tag = this.article.tagList?.join(';');
      })
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
   this.articlesService.updateArticle(articles, 'hoc-sinh-ngheo-vuot-kho-ghl9up').subscribe(data => console.log(data));
   this.router.navigate(['/'])
 }

}
