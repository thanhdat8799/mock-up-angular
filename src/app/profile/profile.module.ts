import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ArticleDetailComponent } from '../home/article-detail/article-detail.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { FavoriteArticleComponent } from './favorite-article/favorite-article.component';

@NgModule({
  declarations: [
    ProfileComponent,
    MyArticlesComponent,
    FavoriteArticleComponent
  ],
  imports: [ProfileRoutingModule, CommonModule],
})
export class ProfileModule {}
