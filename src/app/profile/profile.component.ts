import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username!: string;
  bio!: string;
  image!: string;
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      console.log(data);
      this.username = data.user['username'];
      this.image = data.user['image'];
      this.bio = data.user['bio'];
    });
  }
}
