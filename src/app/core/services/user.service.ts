import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { IUSer } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ischeckLogin = new BehaviorSubject<boolean>(false);
  user: IUSer = {
    user: {
      username: "",
      email: "",
      token: "",
      bio: "",
      image: ""
    }
  };
  constructor() { }
  getUpdate(checked: boolean){
    this.ischeckLogin.next(checked);
  }
}
