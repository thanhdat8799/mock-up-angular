import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentPost, IComments } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }
  getComments(slug: string): Observable<IComments> {
    return this.httpClient.get<IComments>(`http://localhost:3000/api/articles/${slug}/comments`)
  }
  createComment(slug: string, comment: ICommentPost){
     return this.httpClient.post(`http://localhost:3000/api/articles/${slug}/comments`, comment)
  }
}
