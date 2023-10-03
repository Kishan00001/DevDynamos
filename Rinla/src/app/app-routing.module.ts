import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from './admin/category/category.component';
import {FileUploadComponent} from './admin/file-upload/file-upload.component';
//import {AdminPageComponent} from './admin/admin-page/admin-page.component';


const routes: Routes = [
  {path:'admin/category',component:CategoryComponent},
 // {path: 'admin',component:AdminPageComponent},
  {path: 'admin/file-upload',component:FileUploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
