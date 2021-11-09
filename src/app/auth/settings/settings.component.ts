import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  UpdateUser: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.UpdateUser = fb.group({
      image: [''],
      username: ['', Validators.required],
      bio: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    let user1;
    this.authService.getCurrentUser().subscribe((user) => {
      user1 = user;
      console.log(user1);
      this.UpdateUser.patchValue({
        password: localStorage.getItem('password')
      })
      for(let key in user1.user) {
        if(key == 'image'){
          console.log('ok1')
          this.UpdateUser.patchValue({
            image: user1.user[key]
          });
        }
        if(key == 'username'){
          console.log('ok2')
          this.UpdateUser.patchValue({
            username: user1.user[key]
          });
        }
        if(key == 'bio'){
          console.log('ok3')
          this.UpdateUser.patchValue({
            bio: user1.user[key]
          });
        }
        if(key == 'email'){
          console.log('ok4')
          this.UpdateUser.patchValue({
            email: user1.user[key]
          });
        }
        
      }
      
    })
  }
  onSubmit(){
     const user1 = {
       user: {
         image: this.UpdateUser.value.image,
         username: this.UpdateUser.value.username,
         bio: this.UpdateUser.value.bio,
         email: this.UpdateUser.value.email,
         password: this.UpdateUser.value.password
       }
     }
     this.authService.updateUser(user1).subscribe(data => console.log(data));
     this.router.navigate(['/']) // Sau khi update sẽ đến profile của user
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
