import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticlesComponent } from './new-articles/new-articles.component';

const routes: Routes = [
    {
        path: 'new-articles',
        component: NewArticlesComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class EditorRoutingModule {}