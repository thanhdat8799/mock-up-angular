import { Injectable } from '@angular/core';
import { IUSer } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ischeckLogin: boolean = false;
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
  // getUpdate(){

  // }
}
