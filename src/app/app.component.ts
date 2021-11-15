import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mockup-project';
  constructor(private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.userService.getUpdate(true);
      console.log('im run')
    }
  }
}
