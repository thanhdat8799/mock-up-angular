import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';

const routes: Routes = [
  {
    path: ':name',
    component: ArticlesDetailsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class EditorRoutingModule {}
