import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginEducatorComponent } from './Components/login-educator/login-educator.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { LoginStudentComponent } from './Components/login-student/login-student.component';
import { ActionAdminComponent } from './Components/action-admin/action-admin.component';
import { ActionEducatorComponent } from './Components/action-educator/action-educator.component';
import { ActionStudentComponent } from './Components/action-student/action-student.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { DeleteQuestionComponent } from './Components/delete-question/delete-question.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';

const routes: Routes = [
  {path:'',redirectTo:'quizwizhome',pathMatch:"full"},
  {path:"quizwizhome",component:HomeComponent},
  {path:"aboutUs",component:AboutusComponent}, 
  
  {path:"studentregistration",component:RegistrationComponent},
  {path:"adminlogin",component:LoginAdminComponent},
  {path:"educatorlogin",component:LoginEducatorComponent},
  {path:"studentlogin",component:LoginStudentComponent},
  
  {path:"adminaction",component:ActionAdminComponent},
  {path:"educatoraction",component:ActionEducatorComponent},
  {path:"studentaction",component:ActionStudentComponent},
  
  {path:"question",component:QuestionComponent},
  {path:"addQuestion",component:AddQuestionComponent},
  {path:"deleteQuestion",component:DeleteQuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
