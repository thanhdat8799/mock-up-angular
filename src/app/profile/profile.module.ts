import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ArticleDetailComponent } from '../home/article-detail/article-detail.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ArticleDetailComponent
  ],
  imports: [ProfileRoutingModule, CommonModule],
})
export class HomeModule {}
