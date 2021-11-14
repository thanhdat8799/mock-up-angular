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
  getArticleByPage(number: number, offset: number): Observable<IArticles> {
    const url = `http://localhost:3000/api/articles?limit=${number}&offset=${offset}`
    return this.httpClient.get<IArticles>(url)
  } 
  getArticleByPage1(number: number, offset: number): Observable<IArticles> {
    const url = `http://localhost:3000/api/articles/feed?limit=${number}&offset=${offset}`
    return this.httpClient.get<IArticles>(url)
  }
  getArticleByTag(tag: string): Observable<IArticles> {
    const url = `http://localhost:3000/api/articles?tag=${tag}`
    return this.httpClient.get<IArticles>(url)
  }
  PostFavorited(id: string): Observable<any>{
    const url = `http://localhost:3000/api/articles/${id}/favorite`;
    return this.httpClient.post<IArticles>(url, null);
  }
  DeleteFovorited(id: string): Observable<any>{
    const url = `http://localhost:3000/api/articles/${id}/favorite`;
    return this.httpClient.delete<any>(url);
  }
  getArticleBySlug(slug: string): Observable<any>{
    const url = `http://localhost:3000/api/articles/${slug}`
    return this.httpClient.get<any>(url);
  }
  updateArticle(article: IArticlePost, slug: string): Observable<any> {
    const url = `http://localhost:3000/api/articles/${slug}`
    return this.httpClient.put<any>(url, article)
  }
}
