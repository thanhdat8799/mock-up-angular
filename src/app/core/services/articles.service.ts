import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticlePost, IArticles, ITag } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }
  getArticlesGlobal(): Observable<IArticles> {
    return this.httpClient.get<IArticles>('http://localhost:3000/api/articles')
  }
  getTags(): Observable<ITag> {
    return this.httpClient.get<ITag>('http://localhost:3000/api/tags')
  }
  getArticleFeed(){
    return this.httpClient.get('http://localhost:3000/api/articles/feed')
  }
  createArticles(article: IArticlePost){
     return this.httpClient.post('http://localhost:3000/api/articles', article)
  }
  getSingleArticle(slug: string):Observable <any> {
    return this.httpClient.get(`http://localhost:3000/api/articles/${slug}`)
  }
}
