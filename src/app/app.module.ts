import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginModule } from './auth/login-module';
import { HttpErorrInterceptor } from './core/interceptors/http-erorr.interceptor';
import { SettingsComponent } from './auth/settings/settings.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { HomeModule } from './home/home.module';
import { ArticleListComponent } from './home/article-list/article-list.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    HomeModule
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
