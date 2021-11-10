import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';

const routes: Routes = [
  {
    path: 'article/:name',
    component: ArticlesDetailsComponent,
    pathMatch: 'full'
  },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class EditorRoutingModule {}
