import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from "@angular/core";
import { ArticleListComponent } from "./article-list/article-list.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { TagListComponent } from "./tag-list/tag-list.component";
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PagenationComponent } from './pagenation/pagenation.component';

@NgModule({
   declarations: [
    HomeComponent,
    MainComponent,
    ArticleListComponent,
    TagListComponent,
    ArticleDetailComponent,
    PagenationComponent,
   ],
   imports: [
       HomeRoutingModule,
       CommonModule,
       MarkdownModule.forRoot(),
   ]
})
export class HomeModule {

}
