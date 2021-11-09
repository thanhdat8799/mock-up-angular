import { NgModule } from "@angular/core";
import { ArticleListComponent } from "./article-list/article-list.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { TagListComponent } from "./tag-list/tag-list.component";
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    // ArticleListComponent,
    TagListComponent
   ],
   imports: [
       HomeRoutingModule,
       CommonModule
   ]
})
export class HomeModule {

}
