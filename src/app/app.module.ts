import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginModule } from './auth/login-module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { HomeModule } from './home/home.module';
import { ArticleListComponent } from './home/article-list/article-list.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent} from './home/footer/footer.component';
import { ArticlesDetailsComponent } from './editor/articles-details/articles-details.component';
import { CommentDetailsComponent } from './editor/comment-details/comment-details.component';
import { EditorModule } from './editor/editor.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    HomeModule,
    EditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
