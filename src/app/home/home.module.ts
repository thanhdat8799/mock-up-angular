import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from "@angular/core";
import { ArticleListComponent } from "./article-list/article-list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { TagListComponent } from "./tag-list/tag-list.component";
import { CommonModule } from '@angular/common';

import { PagenationComponent } from './pagenation/pagenation.component';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FormsModule } from '@angular/forms';
import { NewCommentComponent } from '../editor/new-comment/new-comment.component';


@NgModule({
   declarations: [
    HomeComponent,
    MainComponent,
    ArticleListComponent,
    TagListComponent,
    PagenationComponent,
    ArticleDetailComponent,
    ArticleDetailComponent,
    NewCommentComponent
   ],
   imports: [
       HomeRoutingModule,
       CommonModule,
       FormsModule,
       MarkdownModule.forRoot(),
   ]
})
export class HomeModule {

}
