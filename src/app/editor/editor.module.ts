import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { EditorRoutingModule } from './editor-routing.module';
import { NewArticlesComponent } from './new-articles/new-articles.component';
@NgModule({
    declarations: [
    NewArticlesComponent
  ],
    imports: [
        CommonModule,
        EditorRoutingModule,
        FormsModule,
        MarkdownModule.forRoot(),
    ]
})
export class EditorModule {}