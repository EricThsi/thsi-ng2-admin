import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { CategoriesComponent } from './blog/categories/categories.component';
import { CategoryDetailComponent } from './blog/category-detail/category-detail.component';

const routes: Routes = [
  {
    path: 'posts',
    component: BlogComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent,
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: '**',
    redirectTo: '/posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
