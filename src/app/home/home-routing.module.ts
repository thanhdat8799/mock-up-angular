import { NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // children: [
    //    {
    //      path: ':page',
    //    }
    // ]
  },
  {
    path: 'articles/:slug',
    component: ArticleDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
