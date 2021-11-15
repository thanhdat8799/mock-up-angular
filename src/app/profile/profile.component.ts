import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  isMe: boolean;
  defaultImg= "https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png";
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.username = params.name;
      this.authService.getCurrentUser().subscribe(user=> {
        this.isMe = this.username == user.user.username;
        console.log(this.isMe ? "yes, its mah profile" : "nah, not my profile" + "its: " + this.username)
      }) 
      console.log(this.username)
      this.authService.getProfile(this.username).subscribe((data) => {
        this.image = data.profile['image'] || this.defaultImg;
        this.bio = data.profile['bio'];
      })
    })
  }
}
