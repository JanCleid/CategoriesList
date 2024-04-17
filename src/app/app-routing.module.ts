import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/action/category-list/category-list.component';
import { AddCategoryComponent } from './features/action/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'admin/categories', component: CategoryListComponent
  },
  {
    path: 'admin/categories/add', component: AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
