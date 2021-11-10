import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRouterModule } from "./login-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from '@angular/common';
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
   declarations: [
       RegisterComponent,
       LoginComponent,
       SettingsComponent,
   ],
   imports: [
       LoginRouterModule,
       ReactiveFormsModule,
       CommonModule,
       FormsModule,
   ]
})
export class LoginModule {}
