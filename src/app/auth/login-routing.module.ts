import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SettingsComponent } from "./settings/settings.component";
const routs: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [AuthGuard]
    }
]
@NgModule({
   declarations: [],
   imports: [
       RouterModule.forChild(routs)
   ],
   exports: [RouterModule]
})
export class LoginRouterModule {}
