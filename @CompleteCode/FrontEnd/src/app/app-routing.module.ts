import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './Components/question/question.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginEducatorComponent } from './Components/login-educator/login-educator.component';
import { LoginStudentComponent } from './Components/login-student/login-student.component';
import { ActionEducatorComponent } from './Components/action-educator/action-educator.component';
import { ActionStudentComponent } from './Components/action-student/action-student.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'quizwizhome',pathMatch:"full"},
  {path:"quizwizhome",component:HomepageComponent},
  {path:"aboutUs",component:AboutusComponent}, 
  {path:"question",component:QuestionComponent},
  {path:"quizwizlogin",component:LoginComponent},
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
