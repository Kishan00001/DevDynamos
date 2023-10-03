import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    CategoryComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
