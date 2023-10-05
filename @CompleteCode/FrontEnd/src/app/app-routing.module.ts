import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginEducatorComponent } from './Components/login-educator/login-educator.component';
import { LoginStudentComponent } from './Components/login-student/login-student.component';
import { ActionEducatorComponent } from './Components/action-educator/action-educator.component';
import { ActionStudentComponent } from './Components/action-student/action-student.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';

const routes: Routes = [
  {path:'',redirectTo:'quizwizhome',pathMatch:"full"},
  {path:"quizwizhome",component:HomeComponent},
  {path:"aboutUs",component:AboutusComponent}, 
  {path:"fileupload",component:FileUploadComponent},
  {path:"question",component:QuestionComponent},

  {path:"studentregistration",component:RegistrationComponent},
  {path:"educatorlogin",component:LoginEducatorComponent},
  {path:"educatoraction",component:ActionEducatorComponent},
  {path:"studentlogin",component:LoginStudentComponent},
  {path:"studentaction",component:ActionStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
