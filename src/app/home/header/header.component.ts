import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  username!: string;
  isCheckLogin: any;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.userService.ischeckLogin.subscribe((data: boolean) => {
      this.isCheckLogin = data;
      console.log(data)
    });
    this.authService.getCurrentUser().subscribe((data) => {
      console.log(data);
      this.username = data.user['username'];
    });
  }

  onLogout(){
    // this.userService.ischeckLogin = false;
    this.userService.getUpdate(false);
    localStorage.setItem('token', '');
    localStorage.setItem('password', '');
    this.userService.user = {
      user: {
        username: "",
        email: "",
        token: "",
        bio: "",
        image: ""
      }
    };
    this.router.navigate(['/']) // Sau khi logout sẽ đến home của user
  }
}
