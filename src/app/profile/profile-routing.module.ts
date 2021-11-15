import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from '../auth/settings/settings.component';
import { ArticleDetailComponent } from '../home/article-detail/article-detail.component';
import { EditArticleComponent } from '../editor/edit-article/edit-article.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'article/:slug',
    component: ArticleDetailComponent
  },
  {
    path: 'editor/:slug',
    component: EditArticleComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
