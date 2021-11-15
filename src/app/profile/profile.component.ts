import { Component, OnInit } from '@angular/core';
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
  defaultImg= "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png";
  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.username = data.user['username'];
      this.image = data.user['image'] || this.defaultImg;
      this.bio = data.user['bio'];
    });
  }
}
