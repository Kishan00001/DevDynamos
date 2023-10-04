import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './Components/teacher/teacher.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { DeletequeComponent } from './Components/deleteque/deleteque.component';

const routes: Routes = [
  {path: '', redirectTo: "question", pathMatch:'full'},
  {path:'add',component:AddQuestionComponent},
  {path:'delete',component:DeletequeComponent},
  {path : 'teacher', component:TeacherComponent},
  //{path:'admin',loadChildren:()=>import("./Modules/admin/admin.module").then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }