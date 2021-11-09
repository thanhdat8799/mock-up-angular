import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signIn: FormGroup;
  errorMessage = "";
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    ) {
    this.signIn = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    const user = {
      user: {
        email: this.signIn.value.email,
        password: this.signIn.value.password
      }
    }
    this.authService.loginUser(user).subscribe(data => {
      this.userService.ischeckLogin = true;
      this.userService.user = data;
      console.log(this.userService.user);
      localStorage.setItem('token', this.userService.user.user.token);
      localStorage.setItem('password', user.user.password);
      this.router.navigate(["/auth/settings"]);
    }, 
    err => {
      this.errorMessage = "Email or Password is invalid!"
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
    })
  }
}
