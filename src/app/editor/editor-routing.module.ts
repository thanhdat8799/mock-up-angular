import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';

const routes: Routes = [
    {
        path: 'new-articles',
        component: NewArticlesComponent
    },
    {
        path: 'edit/:slug',
        component: EditArticleComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class EditorRoutingModule {}
