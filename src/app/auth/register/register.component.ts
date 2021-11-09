import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUp: FormGroup;
  errorMessage = ""
  errorMessage1 = ""
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    ) {
    this.signUp = fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
   }

  ngOnInit(): void {
  }
  onRegister() {
     const user = {
       user: {
        username: this.signUp.value.userName,
        email: this.signUp.value.email,
        password: this.signUp.value.password
      }
     }
     this.authService.createUSer(user).subscribe(data => {
       this.userService.ischeckLogin = true;
       this.userService.user = data;
       localStorage.setItem('token', this.userService.user.user.token);
       localStorage.setItem('password', user.user.password);
       console.log(data);
       this.router.navigate(['/']);
     },
     err => {
       console.log(err.error.errors);
       if(err.error.errors.username != undefined){
         this.errorMessage = "Username " + err.error.errors.username;
         console.log(this.errorMessage)
         setTimeout(() => {
           this.errorMessage = "";
         },3000)
       }
       if(err.error.errors.email != undefined){
         this.errorMessage1 = "Email " + err.error.errors.email;
         console.log(this.errorMessage)
         setTimeout(() => {
          this.errorMessage1 = "";
        },3000)
       }
     })
  }
}
