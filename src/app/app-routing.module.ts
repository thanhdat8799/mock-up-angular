import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/login-routing.module").then((m)=> m.LoginRouterModule)
  },
  {
    path: "",
    loadChildren: () => import("./home/home-routing.module").then((m)=> m.HomeRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


