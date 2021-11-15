import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MainComponent } from './home/main/main.component';
import { EditorRoutingModule } from './editor/editor-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/login-routing.module").then((m)=> m.LoginRouterModule)
  },
  {
    path: "",
    loadChildren: () => import("./home/home-routing.module").then((m)=> m.HomeRoutingModule)
  },
  // {
  //   path: "article",
  //   loadChildren: () => import("./editor/editor-routing.module").then((m)=> m.EditorRoutingModule)
  // },
  {
    path: 'editor',
    loadChildren: () => import("./editor/editor-routing.module").then((m)=>m.EditorRoutingModule)
  },
  {
    path: ":name",
    loadChildren: () => import("./profile/profile-routing.module").then((m)=> m.ProfileRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


