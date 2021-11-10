import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUSer, IUserLogin, IUSerPost } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  createUSer(user: IUSerPost): Observable<IUSer>{
    return this.httpClient.post<IUSer>("http://localhost:3000/api/users", user)
  }
  loginUser(user: IUserLogin): Observable<IUSer> {
    return this.httpClient.post<IUSer>("http://localhost:3000/api/users/login", user)
  }
  getCurrentUser(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/api/user')
  }
  updateUser(user: any): Observable<any>{
    return this.httpClient.put<any>('http://localhost:3000/api/user', user);
  }
}
