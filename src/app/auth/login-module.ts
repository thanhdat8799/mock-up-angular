import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginRouterModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
   declarations: [
       LoginComponent,
       RegisterComponent
   ],
   imports: [
       ReactiveFormsModule,
       LoginRouterModule
   ]
})
export class LoginModule {}