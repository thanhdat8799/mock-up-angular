import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isCheckLogin: any;
  constructor(private  userService: UserService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.userService.ischeckLogin.subscribe(data => {this.isCheckLogin = data; console.log(data)});
    // this.isCheckLogin = this.userService.ischeckLogin
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes)
  // }
}
